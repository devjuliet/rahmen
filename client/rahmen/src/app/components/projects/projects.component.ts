import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { MemberService } from 'src/app/services/member.service';
import { TeamServie } from 'src/app/services/team.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
  constructor(private projectService: ProjectService, private memberService:MemberService,
    private teamService: TeamServie) { }
  
  ngOnInit() {
   this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe(data => {
      this.projectService.projects = data['objs'];
      
      this.projectService.projects.forEach(element => {
        this.memberService.getMember(element['_productOwner']).subscribe( data => {
          element['_productOwner'] = data['objs']['_devName'];
        }); 
        this.memberService.getMember(element['_projectManager']).subscribe( data => {
          element['_projectManager'] = data['objs']['_devName'];
        });
        this.teamService.getTeam(element['_developmentTeam']).subscribe(data => {
          element['_developmentTeam'] = data['objs']['_teamName'];
        }); 
      });
     });
  }
}
