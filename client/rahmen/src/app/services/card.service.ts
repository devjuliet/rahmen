import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = environment.baseUrl + '/cards';
  cards : Object[]
  constructor(private http: HttpClient) { 
    this.cards = [];
  }

  getCard(id:number){
    return this.http.get(this.url + `/index/${id}`);
  }

  getCards(){
    return this.http.get(this.url);
  }

  updateCard(obj, id:number){
    return this.http.put(this.url + `/${id}`, obj);
    
  }
}
