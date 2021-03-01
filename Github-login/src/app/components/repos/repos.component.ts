import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  constructor(private github: GithubService, private ref: ChangeDetectorRef) {}
  @Input() repoUrl: string;
  repos = [];
  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.repoUrl) {
      this.github.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;
          this.ref.detectChanges();
        },
        (err) => console.log(err)
      );
    }
  }
}
