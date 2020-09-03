import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {List} from '../interfaces/list';
@Injectable({
  providedIn: 'root'
})
export class ListInformationService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<List>> {
    return this.http.get<Array<List>>(`${this.url}/list`);
  }
}
