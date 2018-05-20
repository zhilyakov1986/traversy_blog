import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

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
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };

  showExtended = true;
  loaded = false;
  enableAdd = true;
  showUserForm = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser() {
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.registered = new Date();
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    };
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit(e) {
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

}
