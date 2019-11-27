import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SelectedTeamComponent } from './components/teams/selected-team/selected-team.component';
import { SelectedProjectComponent } from './components/projects/selected-project/selected-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectsComponent,
    TeamsComponent,
    SelectedTeamComponent,
    SelectedProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
