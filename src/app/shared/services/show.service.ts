import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  static URL = 'http://localhost:3000/shows/';

  constructor(private http: HttpClient) { }

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(ShowService.URL);
  }
  getById(id): Observable<Show[]> {
    return this.http.get<Show[]>(ShowService.URL + id);
  }
  createShow(newShow) {
    return this.http.post(ShowService.URL, newShow);
  }
  updateShow(showUpdate) {
    const id = showUpdate.id;
    return this.http.put(ShowService.URL + id, showUpdate);
  }
  deleteShow(id) {
    return this.http.delete(ShowService.URL + id);
  }



}
