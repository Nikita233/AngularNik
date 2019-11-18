import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.mytimetable.live/rest/groups/';
  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
