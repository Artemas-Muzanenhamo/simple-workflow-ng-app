import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {Deployment} from '../domain/deployment';

@Injectable()
export class DeploymentService {
  private allDeploymentsURL = 'http://localhost:8080/api/process/deployed-processes';
  private deleteDeployementProcessURL = 'http://localhost:8080/api/process/deployed-processes/delete';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllDeployments(): Observable<Deployment[]> {
    return this.httpClient.get<Deployment[]>(this.allDeploymentsURL);
  }

  deleteDeploymentProcess(deploymentId: number): Observable<Deployment> {
    const deploymentIdJson = {
      deploymentId: deploymentId
    };

    const deleteHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: deploymentIdJson
    };

    return this.httpClient.delete<Deployment>(this.deleteDeployementProcessURL, deleteHttpOptions);
  }
}
