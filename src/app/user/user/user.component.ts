import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userAlreadyExists: boolean = false;

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  userProfile = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    zipCode: new FormControl(''),
  }); 

  userMap = new Map();

  onSubmit(form: FormGroup){
    console.log(this.userMap);
    let currentUser: User = new User();
    currentUser.firstName = form.value.firstName;
    currentUser.lastName = form.value.lastName;
    currentUser.zipCode = form.value.zipCode;
    var userKey = currentUser.firstName + '-' + currentUser.lastName + '-' + currentUser.zipCode
    
    if(this.userMap.has(userKey)){
      this.userAlreadyExists = true;
      console.log('Hello '+this.userAlreadyExists);
    }else{
      this.userAlreadyExists = false;
      this.userMap.set(userKey,'');
      this.userService.addUser(currentUser);
    }
    console.log(this.userMap);
  }

}
