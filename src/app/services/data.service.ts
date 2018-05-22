import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    users: User[];
    data: Observable<any>;
    constructor() {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@gmail.com',
                isActive: true,
                registered: new Date('01/02/2018 08:00:00'),
                hide: true
            },
            {
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@gmail.com',
                isActive: false,
                registered: new Date('03/02/2017 12:00:00'),
                hide: true
            },
            {
                firstName: 'Karen',
                lastName: 'Williams',
                email: 'karen@gmail.com',
                isActive: true,
                registered: new Date('08/02/2016 03:00:00'),
                hide: true
            }
        ];
    }
    getData() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1000);
          setTimeout(() => {
            observer.next(2);
          }, 2000);
          setTimeout(() => {
            observer.next(3);
          }, 3000);
          setTimeout(() => {
            observer.next(4);
          }, 4000);
        });
        return this.data;
    }

    getUsers(): User[] {
        console.log('loading...');
        return this.users;
    }
    addUser(user: User) {
        console.log('adding user...');
        this.users.unshift(user);
    }

}
