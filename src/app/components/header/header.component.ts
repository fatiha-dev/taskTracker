import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="task tracker";
  showAddTask : boolean =false;
  subscription !: Subscription;

  constructor(private uiservice : UiService) { 
    this.subscription=this.uiservice.onToggle().
    subscribe( (value)=>
    this.showAddTask=value)
  }

  ngOnInit(): void {
  }
  toggleTask(){
    this.uiservice.addTaskToggle();
  }
}
