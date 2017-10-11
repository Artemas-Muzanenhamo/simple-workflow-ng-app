import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DeployComponent} from './deploy-process/deploy.component';
import {StartComponent} from './start-process/start.component';
import {FindComponent} from './find-process/find.component';
import {CompleteComponent} from './complete-process/complete.component';
import {ViewComponent} from './view-process/view.component';
import {ViewService} from './view-process/view.service';

@NgModule({
  declarations: [
    AppComponent,
    DeployComponent,
    StartComponent,
    FindComponent,
    CompleteComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ViewService],
  bootstrap: [
    AppComponent,
    DeployComponent,
    StartComponent,
    FindComponent,
    CompleteComponent,
    ViewComponent
  ]
})
export class AppModule { }
