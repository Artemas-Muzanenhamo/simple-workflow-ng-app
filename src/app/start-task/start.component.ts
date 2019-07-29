import {Component} from '@angular/core';
import {StartService} from './start.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-process',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(
    private startService: StartService,
    private router: Router,
  ) {}

  save(): void {
    this.startService.startProcess()
      .subscribe(
        onComplete => {
          return this.router.navigate(['']);
        }
      );
  }

}
