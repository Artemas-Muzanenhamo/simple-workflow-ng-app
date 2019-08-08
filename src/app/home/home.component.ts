import { Component, OnInit } from '@angular/core';
import {ViewService} from '../view-task/view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ViewService]
})
export class HomeComponent implements OnInit {

  title = 'Workflow App';

  constructor() { }

  ngOnInit() {
  }

}
