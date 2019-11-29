import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  active : Object[];
  release : Object[];
  url = environment.baseUrl + '/sprints';

  constructor(private http:HttpClient) { 
    this.active = [];
    this.release = [];
  }

  getSprint(id:number){
    return this.http.get(this.url + `/index/${id}`);
  }

  getSprints(){
    return this.http.get(this.url);
  }
  updateSprint(id: number, obj){
    return this.http.put(this.url + `/${id}`, obj);
  }
}
