import { GroupInfo } from './../../_core/group-info';
import { TodoTask } from './../../_core/todo-task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  TodoTasks: TodoTask[];
  GroupInfo: GroupInfo;
  GroupInfolist: GroupInfo[];
  constructor() { }
  ngOnInit(): void {
    //
    this.GroupInfolist = [
      {
        GroupTitle: "Group 1",
        todoTasks: this.TodoTasks = [{ Title: 'Coffee', Date: new Date() },
        { Title: 'Milk', Date: new Date() }]
      }

      , {
        GroupTitle: "Group 2",
        todoTasks: this.TodoTasks = [{ Title: 'xyz', Date: new Date() },
]
      }
      , {
        GroupTitle: "Group 3",
        todoTasks: this.TodoTasks = [{ Title: '123', Date: new Date() },
        { Title: '456', Date: new Date() }]
      }]
  }
}
