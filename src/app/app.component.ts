import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  data:Array<any>
People:any;


@ViewChild('dobInput') dateOfBirth!: ElementRef;
@ViewChild('ageInput')  age!: ElementRef;
@ViewChild(UsersComponent, {static: true}) usersComp!: UsersComponent;

calculateAge() {
  let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  this.age.nativeElement.value = age;
}
 
  constructor(){
    this.data=[
      { firstName: 'syamala', lastName: 'syam', age: '20'},
      { firstName: 'vaziha', lastName: 'vaz', age: '35'},
      { firstName: 'vinay', lastName: 'vin', age: '27'},
      { firstName: 'bose', lastName: 'boooo', age: '42'},
      { firstName: 'chandra', lastName: 'chan', age: '29'}
    ];
  }

}
