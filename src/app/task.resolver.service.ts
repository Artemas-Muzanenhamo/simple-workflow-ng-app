import {Task} from './domain/task';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ViewService} from './view-task/view.service';

@Injectable()
export class TaskResolverService implements Resolve<Task> {

  constructor(private viewTaskService: ViewService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> | Task {
    const id = +route.params['id'];
    return this.viewTaskService.getTask(id);
  }

}
