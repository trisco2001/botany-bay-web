import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RaidTeamCreateComponent } from './raid-teams/raid-team-create/raid-team-create.component';
import { RaidTeamListComponent } from './raid-teams/raid-team-list/raid-team-list.component';
import { RaidTeamManageComponent } from './raid-teams/raid-team-manage/raid-team-manage.component';
import { RaidTeamViewComponent } from './raid-teams/raid-team-view/raid-team-view.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'users', loadChildren: 'src/app/users/users.module#UsersModule'},
  {path: 'raid-teams/new', component: RaidTeamCreateComponent},
  {path: 'raid-teams', component: RaidTeamListComponent},
  {path: 'raid-teams/:id', component: RaidTeamViewComponent},
  {path: 'raid-teams/:id/manage', component: RaidTeamManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
