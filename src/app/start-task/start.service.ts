import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class StartService {

  private _startTaskUrl = 'http://localhost:8080/api/process/start-task';

  constructor(private _http: Http) { }

  startProcess() {
    const body = {'processInstanceKey': 'my-process'};
    console.log('BODY: ' + JSON.stringify(body));
    this._http.post(this._startTaskUrl, body)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

}
