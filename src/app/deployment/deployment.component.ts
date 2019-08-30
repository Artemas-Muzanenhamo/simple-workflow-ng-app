import { Component, OnInit } from '@angular/core';
import {DeploymentService} from './deployment.service';
import {Deployment} from '../domain/deployment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {

  deployments: Deployment[];

  constructor(
    private deploymentService: DeploymentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.deploymentService.getAllDeployments()
      .subscribe(
        data => {
          this.deployments = data;
        }
      );
  }

  deleteDeployedProcess(deploymentIdString: string) {
    const deploymentId = Number(deploymentIdString);
    this.deploymentService.deleteDeploymentProcess(deploymentId)
      .subscribe(
        data => {
          return this.router.navigate(['/deployed']);
        }
      );
  }

}
