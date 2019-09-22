import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }
  setHandleStorageData(key, value) {
    localStorage.setItem(key, value);
  }

  getHandleStorageData(key) {
    return localStorage.getItem(key);
  }
  getDateFromTimestamp(timestamp) {
    const date = new Date(timestamp*1000);
    // return {year: date.getFullYear(), month: date.getMonth(), day: date.getDay()}
    return date
  }
  getPriorityCode(priority) {
    switch (priority) {
      case 'High':
        return 10;
      case 'Normal':
        return 5;
      case 'Low':
        return 0;
      default:
        break
    }
  }
  getTimestampFromDate(timestamp) {
    // const date = new Date(timestamp*1000);
    // return {year: date.getFullYear(), month: date.getMonth(), day: date.getDay()}
  }
}
