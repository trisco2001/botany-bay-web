import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { RaidTeamCreateComponent } from './raid-teams/raid-team-create/raid-team-create.component';
import { RaidTeamListComponent } from './raid-teams/raid-team-list/raid-team-list.component';
import { RaidTeamManageComponent } from './raid-teams/raid-team-manage/raid-team-manage.component';
import { AddTeamMemberComponent } from './raid-teams/raid-team-manage/add-team-member/add-team-member.component';
import { ListTeamMembersComponent } from './raid-teams/raid-team-manage/list-team-members/list-team-members.component';
import { RaidTeamViewComponent } from './raid-teams/raid-team-view/raid-team-view.component';
import { ChartsModule } from 'ng2-charts';
import { RaidTeamChartComponent } from './raid-teams/raid-team-view/raid-team-chart/raid-team-chart.component';
import { TeamMemberViewComponent } from './team-members/team-member-view/team-member-view.component';
import { CharacterHeaderComponent } from './team-members/team-member-view/character-header/character-header.component';
import { CharacterInfoComponent } from './team-members/team-member-view/character-info/character-info.component';
import { CharacterMetricsComponent } from './team-members/team-member-view/character-metrics/character-metrics.component';
import { RaidTeamOverTimeChartComponent } from './raid-teams/raid-team-view/raid-team-over-time-chart/raid-team-over-time-chart.component';
import { RaidTeamInfoComponent } from './raid-teams/raid-team-view/raid-team-info/raid-team-info.component';
import { RaidTeamMembersComponent } from './raid-teams/raid-team-view/raid-team-members/raid-team-members.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RaidTeamCreateComponent,
    RaidTeamListComponent,
    RaidTeamManageComponent,
    AddTeamMemberComponent,
    ListTeamMembersComponent,
    RaidTeamViewComponent,
    RaidTeamChartComponent,
    TeamMemberViewComponent,
    CharacterHeaderComponent,
    CharacterInfoComponent,
    CharacterMetricsComponent,
    RaidTeamOverTimeChartComponent,
    RaidTeamInfoComponent,
    RaidTeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
