import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Task} from '../domain/task';

@Injectable()
export class StartService {

  private startTaskUrl = 'http://localhost:8080/api/process/start-task';

  constructor(private httpClient: HttpClient) { }

  startProcess(): Observable<Task> {
    const body = {'processInstanceKey': 'my-process'};
    console.log('BODY: ' + JSON.stringify(body));
    return this.httpClient.post<Task>(this.startTaskUrl, body);
  }

}
