import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lastId = 3;
  todoList: any[] = [
    {
      title: 'Create TODO list template',
      completed: false,
      id: 1
    },
    {
      title: 'Create TODO list styles',
      completed: false,
      id: 2
    },
    {
      title: 'Create TODO list logic',
      completed: false,
      id: 3
    },
  ];

  constructor() { }

  addTodo(todo: any) {
    this.todoList.push(todo);
  }
  deleteTodo(id: number) {
    this.todoList.splice(id, 1);
  }
  toggleTodo(item: any) {
    if (item.comleted === true) {
      item.comleted = false;
    }
    item.completed = !item.completed;
  }
}
