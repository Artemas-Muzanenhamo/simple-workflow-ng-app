import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';
import {TaskService} from './task/task.service';

@NgModule({
  declarations: [
    AppComponent,
    DeployComponent,
    StartComponent,
    FindComponent,
    ViewComponent,
    TaskComponent
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
  ]
})
export class AppModule {
}
