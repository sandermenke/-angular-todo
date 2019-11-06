import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo = (todo: Todo) => {
    this.todoService.deleteTodo(todo).subscribe(res => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  };

  addTodo = (todo: Todo) => {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  };
}
