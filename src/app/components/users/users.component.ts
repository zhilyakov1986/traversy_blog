import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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
  loadingUsers = false;
  enableAdd = false;
  showUserForm = false;
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadingUsers = true;
    this.users = this.dataService.getUsers();
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid!');
    } else {
      // isActive = true;
      // isRegistred = new Date();
      value.hide = true;
      this.dataService.addUser(value);

      this.form.reset();
    }
  }
}
