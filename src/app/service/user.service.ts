import { Injectable } from "@angular/core";
import { User } from '../user';

@Injectable()
export class UserService {
    private USERS: User[] = [
        {
            firstName: 'Jane',
            lastName: 'Doe'
        },
        {
            firstName: 'John',
            lastName: 'Doe'
        }
    ];

    getUsers(): User[] {
        return this.USERS;
    }


}