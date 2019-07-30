import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ViewService} from './view.service';
import {Task} from '../domain/task';

@Component({
  selector: 'app-view-process',
  templateUrl: './view.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private viewService: ViewService) {
  }

  tasks: Task[];

  ngOnInit(): void {
    this.viewService.getAllTasks()
      .subscribe(tasks => {
          this.tasks = tasks;
        }
      );
  }
}
