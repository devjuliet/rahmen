import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-team',
  templateUrl: './selected-team.component.html',
  styleUrls: ['./selected-team.component.css']
})
export class SelectedTeamComponent implements OnInit {

  constructor(private memberService:MemberService, private router: ActivatedRoute) { }

  public teamId;
  ngOnInit() {
    this.memberService.members = new Array();
    this.teamId = this.router.snapshot.paramMap.get('id');
    this.getMembers();
    console.log(this.teamId);
  }

  getMembers(){
    this.memberService.getMembers().subscribe(data => {
      data['objs']['docs'].forEach(element => {
        if(element['_devTeam'] == this.teamId){
          this.memberService.members.push(element);
        } 
      });
    });
    console.log(this.memberService.members);
    
  }

}
