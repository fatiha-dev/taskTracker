import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-t-item',
  templateUrl: './t-item.component.html',
  styleUrls: ['./t-item.component.css']
})
export class TItemComponent implements OnInit {
@Input() task !: Task ;
@Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
@Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()
faTime = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task)
  }
  onToggle(task : Task){
    this.onToggleReminder.emit(task)
  }
}
