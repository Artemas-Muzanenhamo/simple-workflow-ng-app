import {Component, OnInit} from '@angular/core';
import {StartService} from './start.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-process',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private startService: StartService,
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
