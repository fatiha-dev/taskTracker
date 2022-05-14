import { Injectable } from '@angular/core';
import{HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable,of } from 'rxjs';
import {Task} from '../Task'

const httpOptions={
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private _url = 'http://localhost:5000/tasks'

  constructor(private _http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this._http.get<Task[]>(this._url)
  }

  deleteTask(task : Task) : Observable<Task>{
    const url = `${this._url}/${task.id}`;
    return this._http.delete<Task>(url)
  }

  updateTaskReminder(task : Task){
    const url = `${this._url}/${task.id}`;
    return this._http.put<Task>(url,task,httpOptions)
  }
  addTask(task : Task) : Observable<Task>{
    return this._http.post<Task>(this._url,task,httpOptions)
  }
}
