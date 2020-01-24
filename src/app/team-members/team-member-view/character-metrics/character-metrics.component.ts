import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { TeamMember, TeamMembersService } from 'src/app/core/services/team-members.service';

@Component({
  selector: 'app-character-metrics',
  templateUrl: './character-metrics.component.html',
  styleUrls: ['./character-metrics.component.scss']
})
export class CharacterMetricsComponent implements OnInit, OnChanges {
  @Input() teamMember: TeamMember;

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
  
  constructor(private teamMembersService: TeamMembersService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.teamMembersService.getSingleTeamMemberMetrics(this.teamMember.raidTeamId, this.teamMember.id).subscribe(teamMemberMetrics => {
      this.barChartData = [
        {
          data: teamMemberMetrics.Items.map(metric => {
            return {
              x: new Date(metric.timestamp), 
              y: metric.averageItemLevel
            };
          }),
          label: "Item Level"
        }
      ]

      console.log("Bar chart data");
      console.log(JSON.stringify(teamMemberMetrics));
      console.log(JSON.stringify(this.barChartData));
    });
  }

}
