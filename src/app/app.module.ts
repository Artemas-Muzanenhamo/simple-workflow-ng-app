import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DeployComponent} from './deploy/deploy.component';

@NgModule({
  declarations: [
    AppComponent,
    DeployComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DeployComponent
  ]
})
export class AppModule { }
