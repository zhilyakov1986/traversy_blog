import { Component, OnInit, ViewChild} from '@angular/core';

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  showExtended = true;
  loaded = false;
  enableAdd = true;
  showUserForm = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getData().subscribe(data => {
      console.log(data);
    });
    // this.users = this._userService.getUsers();
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.loaded = true;
  }

  // addUser() {
  //   this.users.unshift(this.user);
  //   this.user.isActive = true;
  //   this.user.hide = true;
  //   this.user.registered = new Date();
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('FORM is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      // this.users.unshift(value);
      this._userService.addUser(value);
      this.form.reset();
    }
  }
}
