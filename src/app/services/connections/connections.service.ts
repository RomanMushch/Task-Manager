import { Injectable } from '@angular/core';
import {BaseService} from "../tools/base.service";
import {HttpClient} from "@angular/common/http";
import {Enum} from "../../constants/enum";

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {
  private headers: { 'Authorization': string }
  constructor(private http: HttpClient, private baseSrv: BaseService) { }

  serviceConnection(methodUrl, params, methodType) {
    // console.log(methodUrl, params, methodType)
    // console.log(this.baseSrv.getHandleStorageData('token'))
    if (typeof params!=="undefined" && params!==null && params['login']) {
      const data =  this.http.post(methodUrl, params)
      return data
    } else {

      this.headers = {
        'Authorization': 'Bearer ' + this.baseSrv.getHandleStorageData('token')
      }
      if (methodType === Enum.MethodType.POST) {
        var data =  this.http.post(methodUrl, params, { headers: this.headers })
        return data;
      } else if (methodType === Enum.MethodType.GET) {
        var data =  this.http.get(methodUrl, { headers: this.headers })
        return data;
      } else if (methodType === Enum.MethodType.DELETE) {
        var data =  this.http.delete(methodUrl, { headers: this.headers })
        return data;
      } else if (methodType === Enum.MethodType.PUT) {
        var data =  this.http.put(methodUrl, params, { headers: this.headers })
        return data;
      }
    }
  }
}
