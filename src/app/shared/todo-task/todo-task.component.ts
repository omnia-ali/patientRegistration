import { GroupInfo } from './../../_core/group-info';
import { TodoTask } from './../../_core/todo-task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {

  //@Input() TodoTasks: TodoTask[];

  @Input() GroupInfo: GroupInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
