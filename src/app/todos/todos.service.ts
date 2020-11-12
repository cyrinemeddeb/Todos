import {Injectable} from '@angular/core';
import {Todo} from './todos.model';


@Injectable({providedIn: 'root'})
export class TodosService {
  private todos: Todo[] = [
    {
      nom: 'Todo1',
      contenu: 'Contenu du Todo 1'
    }
  ];

  constructor() {
  }

  logerTodo(i) {
    console.log(this.todos[i]);
  }

  ajouterTodo(todo) {
    this.todos.push(todo);
  }

  // tslint:disable-next-line:typedef
  afficherListeTodos() {
    return this.todos;
  }

  supprimerTodo(i) {
    this.todos.splice(i, 1);
  }





}
