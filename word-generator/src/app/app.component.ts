import { Component } from '@angular/core';
import arraywords from '../utilities/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;

  handleSlidechange = (newlimit: number) => {
    this.limit = newlimit;
  };
  genrate = () => {
    this.words = arraywords.slice(0, this.limit).join(' ');
  };
}
