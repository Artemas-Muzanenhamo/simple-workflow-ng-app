import {Component, OnInit} from '@angular/core';
import {StartTaskService} from './start-task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-process',
  templateUrl: './start-task.component.html',
  styleUrls: ['./start-task.component.css']
})
export class StartTaskComponent implements OnInit {

  startProcessLabel = 'START PROCESS';

  constructor(
    private startService: StartTaskService,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  save(): void {
    this.startService.startProcess()
      .subscribe(
        data => {
          return this.router.navigate(['']);
        }
      );
  }

  ngOnInit(): void {
  }

}
