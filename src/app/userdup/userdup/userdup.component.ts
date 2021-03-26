import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userdup',
  templateUrl: './userdup.component.html',
  styleUrls: ['./userdup.component.css']
})
export class UserdupComponent implements OnInit{

  users$: Observable<User>;
  test: String;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // this.userService.getAllUsersObservable()
    //   .subscribe( 
    //     users => {
    //       this.users$ = users;
    //     }
    //   );

      this.users$ = this.userService.getAllUsersObservable();

      this.test = "Hello";

  }



 
}
