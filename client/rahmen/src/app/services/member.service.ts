import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  url = environment.baseUrl + '/members';
  members : Object[]
  constructor(private http: HttpClient) { }

  getMember(id:number){
    return this.http.get(this.url + `/index/${id}`);
  }
}
