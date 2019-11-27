import { Component, OnInit } from '@angular/core';
import { TeamServie } from 'src/app/services/team.service';
import { element } from 'protractor';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService:TeamServie, private projectService:ProjectService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams(1).subscribe(data =>{
      this.teamService.teams = data['objs']['docs'];
      this.teamService.teams.forEach(element => {
        element['_projects'].forEach(proj => {
          this.projectService.getProject(proj).subscribe(data => {
            element['_projects'][proj-1] = data['objs']['_projectName'];
          });
        });
      });
    });
  }

}
