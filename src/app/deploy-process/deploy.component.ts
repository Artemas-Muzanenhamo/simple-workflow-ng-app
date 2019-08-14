import {Component, OnInit} from '@angular/core';
import {Task} from 'app/domain/task';
import {ActivatedRoute, Router} from '@angular/router';
import {Process} from '../domain/process';
import {DeployService} from './deploy.service';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent implements OnInit {

  task: Task;
  title = 'DEPLOY PROCESS';
  process: Process = new Process();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deployService: DeployService
  ) { }

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
    this.route.parent.data
      .subscribe(
        (data) => this.task = data.task
      );
  }

  public onSubmit() {
    console.log('Process Name is: ' + this.process.processName);
    this.deployService.deployProcess(this.process)
      .subscribe(
        afterResponse => this.router.navigate(['/deployed'])
      );
  }
}
