import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { RaidTeamsService, RaidTeamMetricsResponse } from 'src/app/core/services/raid-teams.service';
import { ClassService } from 'src/app/core/services/class.service';

interface Metric {
  timestamp: number;
  averageItemLevel: number;
}

@Component({
  selector: 'app-raid-team-over-time-chart',
  templateUrl: './raid-team-over-time-chart.component.html',
  styleUrls: ['./raid-team-over-time-chart.component.scss']
})
export class RaidTeamOverTimeChartComponent implements OnInit, OnChanges {
  teamMetrics: RaidTeamMetricsResponse;
  selectedRole = "all";
  @Input() raidTeamId: string;
  @Input() allTeamMembers;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
      type: 'time', 
      time: {
        unit: 'day',
        unitStepSize: 1,
        displayFormats: {
           'day': 'MMM DD'
        }
      }
    }], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private raidTeamsService: RaidTeamsService, private classService: ClassService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.raidTeamId) {
      this.raidTeamsService.getTeamMetrics(this.raidTeamId).subscribe(teamMetrics => {
        this.teamMetrics = teamMetrics;
        this.refreshChartData(teamMetrics);
      });
    }
  }

  private refreshChartData(teamMetrics: RaidTeamMetricsResponse) {
    let metricsMap = new Map<string, Array<Metric>>();
    teamMetrics.Items.forEach(current => {
      const metric: Metric = { timestamp: current.timestamp, averageItemLevel: current.averageItemLevel };
      const currentCollection = metricsMap.get(current.raidTeamMemberId);
      if (currentCollection) {
        currentCollection.push(metric);
        metricsMap.set(current.raidTeamMemberId, currentCollection);
      }
      else {
        metricsMap.set(current.raidTeamMemberId, [metric]);
      }
    });
    this.barChartData = Array.from(metricsMap.keys()).map(key => {
      const split = key.split('-');
      const name = split.pop();
      const server = split.pop();
      const matchingMembers = this.allTeamMembers.Items.filter(member => member.name === name && member.server === server)
      if (!matchingMembers[0]) {
        return null;
      }
      console.log(matchingMembers[0]);
      return { 
        label: name, 
        hidden: (this.selectedRole !== "all" && this.selectedRole !== matchingMembers[0].role),
        fill: false,
        borderColor: this.classService.classes[matchingMembers[0].characterData.class].color,
        pointBackgroundColor: this.classService.classes[matchingMembers[0].characterData.class].color,
        pointBorderColor: this.classService.classes[matchingMembers[0].characterData.class].color,
        data: metricsMap.get(key).map(metric => {
          return { x: new Date(metric.timestamp), y: metric.averageItemLevel };
        })
      };
    }).filter(item => item !== null);
  }

  select(itemType: "all" | "tank" | "healer" | "dps") {
    console.log(`Setting role to ${itemType}`);
    this.selectedRole = itemType;
    this.refreshChartData(this.teamMetrics);
  }

}
