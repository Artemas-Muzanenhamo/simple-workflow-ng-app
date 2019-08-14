import { Component, OnInit } from '@angular/core';
import {DeploymentService} from './deployment.service';
import {Deployment} from '../domain/deployment';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {

  deployments: Deployment[];

  constructor(private deploymentService: DeploymentService) { }

  ngOnInit() {
    this.deploymentService.getAllDeployments()
      .subscribe(
        data => {
          this.deployments = data;
        }
      );
  }

}
