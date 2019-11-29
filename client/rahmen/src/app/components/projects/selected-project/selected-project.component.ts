import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { SprintService } from 'src/app/services/sprint.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-selected-project',
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.css']
})
export class SelectedProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: ActivatedRoute, private sprintService: SprintService, 
    private cardService:CardService) { }

  public proyectId
  public selectedProyect = new Object();

  ngOnInit() {

    this.sprintService.active = [];
    this.sprintService.release = [];
    this.cardService.cards  = [];
    this.getProyect();
    this.getSprints();
    this.getCards();
  }

  async getProyect() {
    this.proyectId = await this.router.snapshot.paramMap.get('id');
    await this.projectService.getProject(this.proyectId).subscribe(data => {
      this.selectedProyect = data['objs'];
      console.log(this.selectedProyect);
    });
  }

  async getSprints() {
    await this.sprintService.getSprints().subscribe(data => {
      data['objs'].forEach(element => {
        if (element['_projectId'] == this.proyectId) {
          if (element['_backlogType'] == 'active') {
            this.sprintService.active.push(element);
          }
          else {
            this.sprintService.release.push(element);
          }
        }
      });
    });
    console.log(this.sprintService.release);
  }

  async getCards(){
    await this.cardService.getCards().subscribe(data => {
      console.log(data);
      data['data'].forEach(element => {
        if (element['_projectId'] == this.proyectId) {
          this.cardService.cards.push(element);
        }
      });
    });
  }


}
