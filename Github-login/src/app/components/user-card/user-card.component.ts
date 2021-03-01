import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(private github: GithubService) {}
  @Input() user;
  ngOnInit(): void {}
  getUserData() {}
}
