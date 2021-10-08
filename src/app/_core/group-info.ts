import { GroupBtn } from './group-btn';
import { TodoTask } from './todo-task';
export class GroupInfo {
  Id?: number;
  GroupTitle: string;
  todoTasks?: TodoTask[];
  Groupbtns?:GroupBtn[];
}
