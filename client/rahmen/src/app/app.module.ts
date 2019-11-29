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
import { SelectedSprintComponent } from './components/projects/selected-project/selected-sprint/selected-sprint.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { RetrospectiveComponent } from './components/projects/selected-project/selected-sprint/retrospective/retrospective.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectsComponent,
    TeamsComponent,
    SelectedTeamComponent,
    SelectedProjectComponent,
    SelectedSprintComponent,
    RetrospectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
