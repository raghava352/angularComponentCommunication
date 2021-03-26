import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users$ = new Subject();
  users: User[] = [];

  constructor() { }

  addUser(userFromForm: User){
    this.users.push(userFromForm);
    this.users$.next(this.users);
  }
  
  getAllUsersObservable(): Observable<any>{
    return this.users$.asObservable();
  }
  
}
