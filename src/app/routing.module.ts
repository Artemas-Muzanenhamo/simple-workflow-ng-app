import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view-task/view.component';
import {TaskComponent} from './task/task.component';

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: '0/task', component: TaskComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {
//  TODO: Pass Task Id to Routerlink
}
