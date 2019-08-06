import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {DeployComponent} from './deploy-process/deploy.component';
import {StartComponent} from './start-task/start.component';
import {FindComponent} from './find-task/find.component';
import {ViewComponent} from './view-task/view.component';
import {ViewService} from './view-task/view.service';
import {HttpClientModule} from '@angular/common/http';
import {StartService} from './start-task/start.service';
import {TaskComponent} from './task/task.component';
import {TaskResolverService} from './task.resolver.service';
import {RouterModule, Routes} from '@angular/router';
import {RoutingModule} from './routing.module';
import {TaskService} from './task/task.service';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DeployComponent,
    StartComponent,
    FindComponent,
    ViewComponent,
    TaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule
  ],
  providers: [
    ViewService,
    StartService,
    TaskResolverService,
    TaskService
  ],
  bootstrap: [
    AppComponent,
    StartComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
