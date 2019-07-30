import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../domain/task';
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task;
  backButton: String = 'BACK';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.task = this.route.snapshot.data['task'];
  }

  public completeTask(): void {
    const taskId = Number(this.task.id);
    this.taskService.completeTask(taskId)
      .subscribe(
        data => {
          return this.router.navigate(['']);
        }
      );
  }

}
