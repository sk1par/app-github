import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Github } from './model/github.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  getIssues(username: string, repository: string): Observable<Github[]> {
    return this.http.get<Github[]>(`https://api.github.com/repos/${username}/${repository}/issues`);
  }
}
