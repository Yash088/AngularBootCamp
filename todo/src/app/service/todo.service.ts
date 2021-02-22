import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todo: Todo[];
  constructor() {
    this.todo = [
      {
        id: '111',
        title: 'Learn code',
        isComplete: false,
        date: new Date(),
      },
      {
        id: '112',
        title: 'L2112earn code',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '113',
        title: '3434Learn code',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '114',
        title: 'rfrfLearn code',
        isComplete: false,
        date: new Date(),
      },
    ];
  }
  getTodos = () => {
    return of(this.todo);
  };
  addTodo = (todo: Todo) => {
    this.todo.push(todo);
  };
  changeStatus = (todo: Todo) => {
    this.todo.map((data) => {
      if (data.id == todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    });
  };
  deleteTodo = (todo: Todo) => {
    const indexofTodo = this.todo.findIndex((data1) => data1.id == todo.id);
    this.todo.splice(indexofTodo, 1);
  };
}
