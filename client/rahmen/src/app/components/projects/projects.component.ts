import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
  constructor(private projectService: ProjectService, private memberService:MemberService) { }
  
  ngOnInit() {
   this.getProjects(1);
  }

  getProjects(id:number){
    this.projectService.getProjects(id).subscribe(data => {
      this.projectService.projects = data['objs']['docs'];
      this.projectService.projects.forEach(element => {
        this.memberService.getMember(element['_productOwner']).subscribe( data => {
          element['_productOwner'] = data['objs']['_devName'];
        }); 
        this.memberService.getMember(element['_projectManager']).subscribe( data => {
          element['_projectManager'] = data['objs']['_devName'];
        }); 
      });
     });
  }
}
