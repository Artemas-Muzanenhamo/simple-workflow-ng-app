import {Injectable} from '@angular/core';
import {Task} from '../domain/task';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ViewService {

  private _allTasksUrl = 'http://localhost:8080/api/process/tasks';
  private taskByIdUrl = 'http://localhost:8080/api/process/task';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this._allTasksUrl);
  }

  public getTask(id: Number): Observable<Task> {

    const taskIdentifier = {
      taskId: id
    };

    return this.httpClient.post<Task>(this.taskByIdUrl, taskIdentifier, this.httpOptions);
  }
}
