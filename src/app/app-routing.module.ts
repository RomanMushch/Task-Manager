import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {TasksListComponent} from "./tasks/tasks-list/tasks-list.component";
import {AddUpdateTaskComponent} from "./tasks/add-update-task/add-update-task.component";
import {UpdateDeleteTaskComponent} from "./tasks/update-delete-task/update-delete-task.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'tasks',
    component: TasksListComponent
  },
  {
    path: 'add-new-task',
    component: AddUpdateTaskComponent
  },
  {
    path: 'add-update-task/:taskId',
    component: AddUpdateTaskComponent
  },
  {
    path: 'task-details/:taskId',
    component: UpdateDeleteTaskComponent
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
