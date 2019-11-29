import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.css']
})
export class RetrospectiveComponent implements OnInit {
  selectedProyect = new Object();
  selectedSprint = new Object();
  isActive: boolean;

  @Input()
  isVisible: boolean;

  @Output()
  visible = new EventEmitter();

  www: String;
  wcbi: String;
  cti: String;

  constructor(private router: ActivatedRoute, private projectService: ProjectService,
    private sprintService: SprintService) { }

  public sid;
  public id
  ngOnInit() {
    this.sid = this.router.snapshot.paramMap.get('sid');
    this.id = this.router.snapshot.paramMap.get('id');
    this.selectedProyect = new Object();
    this.selectedSprint = new Object();
    this.getProyect();
    this.getSprint();
  }

  async getProyect() {
    this.projectService.getProject(this.id).subscribe(data => {
      this.selectedProyect = data['objs'];
    });
  }
  async getSprint() {
    await this.sprintService.getSprint(this.sid).subscribe(data => {
      this.selectedSprint = data['objs'];
      this.isActive = (this.selectedSprint['_backlogType'] == 'active') ? this.isActive = true : this.isActive = false;
    });
  }

  async submit() {
    if (this.isActive) {
      this.selectedSprint['_retrospective']['_what_went_well'] = this.www;
      this.selectedSprint['_retrospective']['_what_could_be_improved'] = this.wcbi;
      this.selectedSprint['_retrospective']['_commit_to_improve'] = this.cti;
      this.selectedSprint['_backlogType'] = 'release';
      console.log(this.selectedSprint);

      await this.sprintService.updateSprint(this.selectedSprint['_sprintId'], this.selectedSprint)
        .subscribe();
    }

    this.isVisible = true;
    this.visible.emit(this.isVisible);


  }
}
