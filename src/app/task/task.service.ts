import {Observable} from 'rxjs/Rx';
import {Task} from '../domain/task';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TaskService {

  private completeTaskUrl = 'http://localhost:8080/api/process/complete-task';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public completeTask(taskId: number): Observable<Task> {

    const taskIdentifier = {
      taskId: taskId
    };

    return this.httpClient.post<Task>(this.completeTaskUrl, taskIdentifier, this.httpOptions);
  }
}
