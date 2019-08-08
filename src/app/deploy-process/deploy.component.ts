import {Component, OnInit} from '@angular/core';
import {Task} from 'app/domain/task';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.css']
})
export class DeployComponent implements OnInit {

  task: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
    this.route.parent.data
      .subscribe(
        (data) => this.task = data.task
      );
  }
}
