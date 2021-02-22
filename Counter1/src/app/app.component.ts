import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    this.count += 1;
  };
  handleDecrease = () => {
    if (this.count > 0) {
      this.count -= 1;
    }
  };
  reset = () => {
    this.count = 0;
  };
}
