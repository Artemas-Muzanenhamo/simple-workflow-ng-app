import {Component, OnInit} from '@angular/core';
import {StartService} from './start.service';

@Component({
  selector: 'app-start-process',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private startService: StartService) {}

  save() {
    this.startService.startProcess();
  }

}
