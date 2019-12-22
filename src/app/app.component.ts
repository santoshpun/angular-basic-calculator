import { Component } from '@angular/core';
import { CalculatorService } from './service/calculator.service';
import { UserService } from './service/user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic-calculator';
  sum: number = 0;
  subtraction: number = 0;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  users: User[] = [];

  constructor(private calc: CalculatorService, private userService: UserService) {
    this.sum = calc.add(1, 2);
    this.subtraction = calc.subtract(5, 2);
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
