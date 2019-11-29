import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-selected-sprint',
  templateUrl: './selected-sprint.component.html',
  styleUrls: ['./selected-sprint.component.css']
})
export class SelectedSprintComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  public sid;

  public toDo = [
    {issue:'issue #1234',
     title:'Register',
     desc:'lorem ipsum' 
    },
    {issue:'issue #1234',
     title:'Register',
     desc:'lorem ipsum' 
    }
  ];
  public doing = [{issue:'issue #1234',
  title:'Register',
  desc:'lorem ipsum' 
 }];
  public done = [{issue:'issue #1234',
  title:'Register',
  desc:'lorem ipsum' 
 }];

  ngOnInit() {
   this.sid = this.router.snapshot.paramMap.get('sid');
  }

  onDropEvent(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}
