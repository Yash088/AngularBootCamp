import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { v4 as uuid } from 'uuid';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;
  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {}
  handleAdd() {
    const newTodo: Todo = {
      id: uuid(),
      title: this.todoTitle,
      isComplete: false,
      date: new Date(),
    };
    this.TodoService.addTodo(newTodo);
    this.todoTitle = '';
  }
}
