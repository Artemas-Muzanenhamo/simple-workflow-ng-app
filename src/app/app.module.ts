import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {DeployComponent} from './deploy-process/deploy.component';
import {StartTaskComponent} from './start-task/start-task.component';
import {FindComponent} from './find-task/find.component';
import {ViewComponent} from './view-task/view.component';
import {ViewService} from './view-task/view.service';
import {HttpClientModule} from '@angular/common/http';
import {StartTaskService} from './start-task/start-task.service';
import {TaskComponent} from './task/task.component';
import {TaskResolverService} from './task.resolver.service';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';
import {TaskService} from './task/task.service';
import {HomeComponent} from './home/home.component';
import {DeploymentComponent} from './deployment/deployment.component';
import {DeploymentService} from './deployment/deployment.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeployComponent,
    StartTaskComponent,
    FindComponent,
    ViewComponent,
    TaskComponent,
    HomeComponent,
    DeploymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
    ViewService,
    StartTaskService,
    TaskResolverService,
    TaskService,
    DeploymentService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
