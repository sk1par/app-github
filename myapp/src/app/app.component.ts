import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubServiceService } from './core/github-service.service';
import { Github } from './core/model/github.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-app';
  noResult = false;
  issues: Github[];
  registerForm = this.fb.group({
    username: [null, [Validators.required]],
    repository: [null, [Validators.required]]
  });

  constructor(private hubService: GithubServiceService, private fb: FormBuilder) {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.hubService.getIssues(this.registerForm.controls.username.value, this.registerForm.controls.repository.value).subscribe(data => {
      this.noResult = false;
      this.issues = data;
      this.registerForm.controls.username.setValue('');
      this.registerForm.controls.repository.setValue('');
    },
    err => {
      if (err.status === 404) {
        this.issues = [];
        this.noResult = true;
      }
    });
  }
}
