import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbDate, NgbDateNativeAdapter, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import {Enum} from "../../constants/enum";
import {UserService} from "../../services/security/user.service";
import {formatDate} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseService} from "../../services/tools/base.service";

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class AddUpdateTaskComponent implements OnInit {

  addTaskModel : any;
  model: Date;
  today: NgbDateStruct;
  date: {year: number, month: number};
  priorityTypes = Enum.PriorityType
   taskDate: string;
  taskId: string;
  taskDetails$: any;

  constructor(private activeRoute: ActivatedRoute, private calendar: NgbCalendar, private userSrv: UserService,
              private baseSvc: BaseService, private router: Router) {
    this.model = new Date()
    this.today = this.calendar.getToday();
  }

  onChoosePriority(type) {
    this.priorityTypes.forEach(value => {
      value.Type === type ? value.Selected = true : value.Selected = false;
    })
    this.addTaskModel.priority = type
  }

  ngOnInit() {
    this.taskId = this.activeRoute.snapshot.params['taskId'];
    if (this.taskId) {
      this.userSrv.getTaskDetails(this.taskId)
        .subscribe(response => {
          // console.log(JSON.stringify(response['task']))
          this.addTaskModel = response['task'];
          this.model = this.baseSvc.getDateFromTimestamp(this.addTaskModel.dueBy)
          this.onChoosePriority(this.addTaskModel['priority'])
        })
    } else {
      this.addTaskModel = {
        title: '',
        description: '',
        dueBy: null,
        priority: ''
      }
      this.onChoosePriority(null)
    }
  }
  addNewTask() {
    this.addTaskModel.dueBy = Math.floor(this.model.getTime()/1000);
    if (this.addTaskModel.id) {
      delete this.addTaskModel.id
    }
    // console.log(JSON.stringify(this.addTaskModel))
    this.userSrv.setNewTask(this.addTaskModel, this.taskId)
      .subscribe(response => {
        if (response) {
          this.onChoosePriority(null)
          this.router.navigate(['/tasks'])
        }
      }, error => {
        alert(error)
      });
  }
}
