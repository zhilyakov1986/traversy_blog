import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class DataService {
    users: User[];
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
    getUsers(): User[] {
        return this.users;
    }
    addUser(user: User) {
        this.users.unshift(user);
    }

}
