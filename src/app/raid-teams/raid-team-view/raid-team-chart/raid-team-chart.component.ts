import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

interface TeamMember {
  name: string;
  server: string;
  id: string;
  characterData?: any;
}

interface Role {
  averageItemLevel: number;
  count: number;
  members: TeamMember[];
  icon: string;
  name: string;
  description: string;
}

interface Roster {
  tanks: Role;
  healers: Role;
  rdps: Role;
  mdps: Role;
  unset: Role;
}

@Component({
  selector: 'app-raid-team-chart',
  templateUrl: './raid-team-chart.component.html',
  styleUrls: ['./raid-team-chart.component.scss']
})
export class RaidTeamChartComponent implements OnInit, OnChanges {
  @Input() roster: Roster;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const barChartMembers = this.roster.healers.members
      .concat(this.roster.tanks.members)
      .concat(this.roster.rdps.members)
      .concat(this.roster.mdps.members)
      .concat(this.roster.unset.members)
      .sort((a, b) => b.characterData.items.averageItemLevelEquipped - a.characterData.items.averageItemLevelEquipped)
    console.log("Bar Chart Members");
    console.log(barChartMembers);
    this.barChartData = [
      {data: barChartMembers.map(m => m.characterData.items.averageItemLevelEquipped), label: 'Item Level'},
      {data: barChartMembers.map(m => m.characterData.items.neck.itemLevel), label: 'Heart Belief'}
    ];
    this.barChartLabels = barChartMembers.map(m => m.name);
  }

  ngOn

}
