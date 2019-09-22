import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { AddUpdateTaskComponent } from './tasks/add-update-task/add-update-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateDeleteTaskComponent } from './tasks/update-delete-task/update-delete-task.component';
import { TableSortableDirective } from './directives/table-sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TasksListComponent,
    AddUpdateTaskComponent,
    UpdateDeleteTaskComponent,
    TableSortableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
