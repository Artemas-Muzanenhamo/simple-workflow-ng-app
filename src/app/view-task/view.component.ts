import {Component, OnInit} from '@angular/core';
import {ViewService} from './view.service';
import {Task} from '../domain/task';

@Component({
  selector: 'app-view-process',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  errorMessage: string;

  constructor(private viewService: ViewService) {
  }

  tasks: Task[];

  ngOnInit(): void {
    this.viewService.getAllTasks()
      .subscribe(tasks => {
          this.tasks = tasks;
        },
        error => this.errorMessage = <any>error);
  }
}
