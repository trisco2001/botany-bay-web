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
    RaidTeamChartComponent
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
