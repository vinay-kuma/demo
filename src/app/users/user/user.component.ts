import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() user!: User;
@Output() userSelected = new EventEmitter<User>();
  constructor() { }

  onUserSelect() {
    this.userSelected.emit(this.user);
  }

  ngOnInit(): void {
  }

}
