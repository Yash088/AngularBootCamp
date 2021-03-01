import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  error = null;
  constructor(private github: GithubService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
  handleFindUser() {
    this.github.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.error = err;
        this.user = null;
      }
    );
  }
}
