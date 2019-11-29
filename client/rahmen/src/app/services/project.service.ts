import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = environment.baseUrl + '/projects';
  projects : Object[]
  constructor(private http: HttpClient) { }

  getProjects(){    
    return this.http.get(this.url);
  }

  getProject(id:number){    
    return this.http.get(this.url + `/index/${id}`);
  }
}
