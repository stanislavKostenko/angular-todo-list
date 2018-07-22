import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
  toggleTodo(item) {
    this.todoService.toggleTodo(item);
  }
}
