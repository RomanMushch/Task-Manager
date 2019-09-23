import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {UserService} from "../../services/security/user.service";
import {BaseService} from "../../services/tools/base.service";
import {compare, SortEvent, TableSortableDirective} from "../../directives/table-sortable.directive";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasksList$: any;
  tracks: any[];
  constructor(private userSvc:UserService, private baseSvc: BaseService) { }

  ngOnInit() {
    this.userSvc.getTasksList(undefined)
      .subscribe(response => {
        this.tasksList$ = response;
        localStorage.setItem('TaskLists', JSON.stringify(response));
        this.tasksList$['tasks'].forEach(task => {
          task.priorityCode = this.baseSvc.getPriorityCode(task.priority)
          task.dueBy = this.baseSvc.getDateFromTimestamp(task.dueBy)
        })

      }, error => {
       if (error.status === 0) {
         // console.log()
         this.tasksList$ = JSON.parse(localStorage.getItem('TaskLists'))
       } else {
         alert(error.error.message)
       }
      })
  }
  @ViewChildren(TableSortableDirective) headers: QueryList<TableSortableDirective>;

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction !== '')  {
      this.tasksList$['tasks'] = [...this.tasksList$['tasks']].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
