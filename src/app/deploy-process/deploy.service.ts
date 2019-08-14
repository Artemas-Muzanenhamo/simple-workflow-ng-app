import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Process} from '../domain/process';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DeployService {
  private deployProcessUrl = 'http://localhost:8080/api/process/deploy';


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  deployProcess(process: Process): Observable<Process> {
    return this.httpClient.post<Process>(this.deployProcessUrl, process, this.httpOptions);
  }

}
