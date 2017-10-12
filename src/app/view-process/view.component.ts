import {Component, OnInit} from '@angular/core';
import {ViewService} from './view.service';
import {Task} from '../domain/task';

@Component({
  selector: 'app-view-process',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private viewService: ViewService) {}

  task: Task[];

  ngOnInit(): void {
    this.task = this.viewService.getProcesses();
  }
}
