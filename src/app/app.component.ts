import { Component } from '@angular/core';
import {ViewService} from './view-process/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ViewService]
})
export class AppComponent {
  title = 'Workflow App';
}
