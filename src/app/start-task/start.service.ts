import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StartService {

  private _startTaskUrl = 'http://localhost:8080/api/process/start-task';

  constructor(private _http: HttpClient) { }
}
