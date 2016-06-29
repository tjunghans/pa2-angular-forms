import { Component } from '@angular/core';
import { Mock } from './mock';
import { Person } from './model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  user: Person;

  constructor(_mock: Mock) {
    this.user = _mock.mike;
  }
}