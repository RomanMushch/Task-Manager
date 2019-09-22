import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Enum} from "../../constants/enum";
import {ConnectionsService} from "../connections/connections.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceBaseUrl = Enum.protocol + Enum.apiPath;
  constructor(private http: HttpClient, private router: Router, private connection:ConnectionsService) { }
  signIn(form) {
    const methodUrl = this.serviceBaseUrl + 'auth';
    return this.connection.serviceConnection(methodUrl, form, Enum.MethodType.POST);
  }
  getTasksList(params) {
    let methodUrl = this.serviceBaseUrl + 'tasks';
    if (typeof params!=="undefined") {
      methodUrl += '?1=1'
      params.page ? methodUrl += '&page=' + params.page : methodUrl += ''
      params.sort ? methodUrl += '&sort=' + params.sort : methodUrl += ''
    }
    return this.connection.serviceConnection(methodUrl, null, Enum.MethodType.GET);
  }
  setNewTask(params, update) {
    let methodUrl = this.serviceBaseUrl + 'tasks';
    update ? methodUrl += '/' + update : methodUrl += ''
    return this.connection.serviceConnection(methodUrl, params, update ? Enum.MethodType.PUT : Enum.MethodType.POST);
  }
  getTaskDetails(id) {
    const methodUrl = this.serviceBaseUrl + 'tasks/' + id;
    return this.connection.serviceConnection(methodUrl, null, Enum.MethodType.GET);
  }
  deleteTask(id) {
    const methodUrl = this.serviceBaseUrl + 'tasks/' + id;
    return this.connection.serviceConnection(methodUrl, null, Enum.MethodType.DELETE);
  }
}
