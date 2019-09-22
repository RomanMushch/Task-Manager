import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbCalendar} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/security/user.service";
import {BaseService} from "../../services/tools/base.service";

@Component({
  selector: 'app-update-delete-task',
  templateUrl: './update-delete-task.component.html',
  styleUrls: ['./update-delete-task.component.scss']
})
export class UpdateDeleteTaskComponent implements OnInit {
  taskId: string;
  taskDetails$: any;

  constructor(private activeRoute: ActivatedRoute, private userSrv: UserService, private router: Router,
              private baseSvc: BaseService) { }

  ngOnInit() {
    this.taskId = this.activeRoute.snapshot.params['taskId'];
    if (this.taskId) {
      this.userSrv.getTaskDetails(this.taskId)
        .subscribe(response => {
          // console.log(JSON.stringify(response));
          this.taskDetails$ = response;
          this.taskDetails$['task'].dueBy = this.baseSvc.getDateFromTimestamp(this.taskDetails$['task'].dueBy)
        })
    }

  }
  onDeleteTask() {
    this.userSrv.deleteTask(this.taskId)
      .subscribe(() => {
        this.router.navigate(['/tasks'])
      })
  }
}
