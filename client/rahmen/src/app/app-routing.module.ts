import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SelectedTeamComponent } from './components/teams/selected-team/selected-team.component';
import { SelectedProjectComponent } from './components/projects/selected-project/selected-project.component';
import { SelectedSprintComponent } from './components/projects/selected-project/selected-sprint/selected-sprint.component';
import { RetrospectiveComponent } from './components/projects/selected-project/selected-sprint/retrospective/retrospective.component';


const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'teams/:id', component: SelectedTeamComponent},
  {path: 'projects/:id', component: SelectedProjectComponent},
  {path: 'projects/:id/:sid', component: SelectedSprintComponent},
  {path: 'projects/:id/:sid/retrospective', component: RetrospectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
