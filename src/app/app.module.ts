import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DeployComponent} from './deploy/deploy.component';
import {StartComponent} from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    DeployComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DeployComponent,
    StartComponent
  ]
})
export class AppModule { }
