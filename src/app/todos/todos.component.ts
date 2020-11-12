import { Component, OnInit } from '@angular/core';
import {Todo} from './todos.model';
import {TodosService} from './todos.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todoNom: string;
  todoContenu: string;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todoService.afficherListeTodos();
  }

  onSubmit(todoForm) {
    this.todoService.ajouterTodo(new Todo(this.todoNom, this.todoContenu));
    console.log('Le Todo a été ajouté');
    todoForm.form.reset();
  }

  deleteTodo(i) {
    this.todoService.supprimerTodo(i);
  }

}
