import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardService } from 'src/app/services/card.service';
import { ProjectService } from 'src/app/services/project.service';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-selected-sprint',
  templateUrl: './selected-sprint.component.html',
  styleUrls: ['./selected-sprint.component.css']
})
export class SelectedSprintComponent implements OnInit {

  constructor(private router: ActivatedRoute, private cardService: CardService,
    private projectService: ProjectService,
    private sprintService: SprintService) { }

  public sid;
  public id;
  public selectedProyect = new Object();
  public selectedSprint = new Object();

  public toDo = [];
  public doing = [];
  public done = [];
  public isActive;
  public isVisible : boolean;

  ngOnInit() {
    this.sid = this.router.snapshot.paramMap.get('sid');
    this.id = this.router.snapshot.paramMap.get('id');
    this.getProyect();
    this.getCards();
    this.getSprint();
    this.isVisible = true;
    
  }

  async getProyect() {
    await this.projectService.getProject(this.id).subscribe(data => {
      this.selectedProyect = data['objs'];
    });
  }
  async getSprint(){
    await this.sprintService.getSprint(this.sid).subscribe(data => {
      this.selectedSprint = data['objs'];
      this.isActive = (this.selectedSprint['_backlogType'] == 'active') ? this.isActive = true : this.isActive = false;
    });
  }
  async getCards() {
    await this.cardService.getCards().subscribe(data => {
      data['data'].forEach(element => {
        if (element['_sprintId'] == this.sid) {
          if (element['_status'] == null || element['_status'] == 'todo' || element['_status'] == '') {
            this.toDo.push(element);
          }
          else if (element['_status'] == 'doing') {
            this.doing.push(element);
          }
          else if (element['_status'] == 'done') {
            this.done.push(element);
          }
        }
      });
    });
  }

  change(event){
    this.isVisible = event;
    
  }

  onDropEvent(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        console.log(event.container);
        
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        console.log(event.container);
        if(event.container.id == "to-do-column"){
          let card = event.container.data[event.currentIndex];
          card['_status'] = 'todo';
          this.cardService.updateCard(card, card['_cardId']).subscribe();
        }
        else if(event.container.id == "in-progress-column"){
          let card = event.container.data[event.currentIndex];
          card['_status'] = 'doing';
          this.cardService.updateCard(card, card['_cardId']).subscribe();
        }
        else if(event.container.id == "done-column"){
          let card = event.container.data[event.currentIndex];
          card['_status'] = 'done';
          this.cardService.updateCard(card, card['_cardId']).subscribe();
        }
        
    }
  }

}
