import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view-task/view.component';
import {TaskComponent} from './task/task.component';
import {TaskResolverService} from './task.resolver.service';
import {DeployComponent} from './deploy-process/deploy.component';

const routes: Routes = [
  {path: '', component: ViewComponent},
  {
    path: ':id/task', component: TaskComponent,
    resolve: {task: TaskResolverService},
    children: [
      {path: 'deploy', component: DeployComponent}
    ]
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
export class RoutingModule {
}
