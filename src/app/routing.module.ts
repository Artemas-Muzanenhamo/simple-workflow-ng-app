import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {TaskResolverService} from './task.resolver.service';
import {DeployComponent} from './deploy-process/deploy.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './view-task/view.component';

const routes: Routes = [
  {path: '', component: AppComponent,
    children: [
      {path: '', component: HomeComponent,
      children: [
        {path: '', component: ViewComponent}
      ]}
    ]
  },
  {
    path: ':id/task', component: TaskComponent,
    children: [
      {path: 'deploy', component: DeployComponent}
    ],
    resolve: {task: TaskResolverService}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'}),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
