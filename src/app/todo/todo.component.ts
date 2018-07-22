import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
  }

}
