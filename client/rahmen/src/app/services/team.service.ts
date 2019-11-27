import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeamServie {
  url = environment.baseUrl + '/teams';
  teams : Object[]
  constructor(private http: HttpClient) { }

  getTeam(id:number){
    return this.http.get(this.url + `/index/${id}`);
  }

  getTeams(id:number){
    return this.http.get(this.url + `/${id}`);
  }
}
