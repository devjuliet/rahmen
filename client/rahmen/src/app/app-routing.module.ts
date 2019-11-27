import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SelectedTeamComponent } from './components/teams/selected-team/selected-team.component';
import { SelectedProjectComponent } from './components/projects/selected-project/selected-project.component';


const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'teams/:id', component: SelectedTeamComponent},
  {path: 'projects/:id', component: SelectedProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
