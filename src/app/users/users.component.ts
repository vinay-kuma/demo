import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];
  selectedUser: User | null = null;

  contactForm = new FormGroup({
     name: new FormControl(),
     human: new FormControl(),
    //  unMarried: new FormControl(),
     country: new FormControl()
    }) 

  // countries = ['USA', 'Germany', 'Italy', 'France']
  

  

  constructor() {
    this.users = [new User(1, 'person 1', 'Chennai', 'Software'),
  new User(2, 'Person 2', 'Delhi', 'HardWare')];

  console.log(this.users);
  this.selectedUser = this.users[1];

    // this.contactForm = this.createFormGroup();
}

  // createFormGroup() {
  //   return new FormGroup({
  //     personalData: new FormGroup({
  //       name: new FormControl(),
  //       country: new FormControl(),
  //     }),
  //   })
  // }
  trackUser(index: number, user: User) { 
    return user ? user.id : undefined;
  }

  onUserSelect(user :User) {
    this.selectedUser = user;
  }
  
  onSubmit() {
    console.log(this.contactForm.value);}
    // sayHello(){
    //   console.log('Hello  How Are You :)')
    // }

  ngOnInit() {


  }
  sayHello(){
    console.log('Hello  How Are You :)')
  }
}









// contactForm = new FormGroup({
//   name: new FormControl(),
//   isMarried: new FormControl(),
//   unMarried: new FormControl(),
//   country: new FormControl()
// }) 

// constructor() {
//   this.users = [
//       new User(1, 'Person 1', 'Hyderabad', 'Software'),
//       new User(2, 'Person 2', 'Mumbai', 'Sales'),
//   ];

//    console.log(this.users);
// }

// trackUser(index: number, user: User) {
//   return user ? user.id : undefined;
// }

// onSubmit() {
//   console.log(this.contactForm.value);
// }

// onUserSelect(event: User) {
// this.selectedUser = event;
// }
// }
