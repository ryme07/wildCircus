import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(UserService.URL);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(UserService.URL + id);
  }

  createUser(newUser: User): Observable<any> {
    return this.http.post(UserService.URL, newUser);
  }

  updateUser(userUpdate: User): Observable<any> {
    const id = userUpdate.id;
    return this.http.put(UserService.URL + id, userUpdate);
  }

  deleteUser(id: number): Observable<any> {
  return this.http.delete(UserService.URL + '/' + id);
  }


}
