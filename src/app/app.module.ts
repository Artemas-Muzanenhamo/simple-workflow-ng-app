import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DeployComponent} from './deploy-process/deploy.component';
import {StartComponent} from './start-task/start.component';
import {FindComponent} from './find-task/find.component';
import {CompleteComponent} from './complete-task/complete.component';
import {ViewComponent} from './view-task/view.component';
import {ViewService} from './view-task/view.service';
import {HttpClientModule} from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
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
