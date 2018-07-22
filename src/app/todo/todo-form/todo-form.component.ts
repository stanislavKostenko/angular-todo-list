import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoFormComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @Input() todoList: any[];
  constructor( private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    debugger;
    const title = this.form.controls['title'].value;
    const competed = false;
    this.todoService.addTodo({title, competed});
    this.form.reset();
  }
}
