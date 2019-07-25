import {Injectable} from '@angular/core';
import {Task} from '../domain/task';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ViewService {

  private _allTasksUrl = 'http://localhost:8080/api/process/tasks';
  private taskByIdUrl = 'http://localhost:8080/api/process/task';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._allTasksUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  public getTask(id: Number): Observable<Task> {

    const taskIdentifier = {
      taskId: id
    };

    return this.http.post(this.taskByIdUrl, taskIdentifier, this.httpOptions)
      .do(data => JSON.stringify(data))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
