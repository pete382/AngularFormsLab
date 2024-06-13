import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Todo } from './models/todo';
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  formTodo: Todo={} as Todo;

  title = 'Todo List';

   todos: Todo[] =  [ 
      { task: "wake up",
        completed: true,
        duration: 8
      },
      { task: "eat breakfast",
        completed: true,
        duration: .5
      },
      { task: "brush teeth",
        completed: false,
        duration: .1
      },
      { task: "take shower",
        completed: false,
        duration: .25
      },     
   ]

   deleteTodo(targetTodo:Todo):void{
    let index: number = this.todos.findIndex(t => t == targetTodo); //find record
    this.todos.splice(index,1); //delete record
  }

  updateTodo(targetTodo:Todo):void
  {
    //let index:number = this.todos.findIndex(t=>t == targetTodo);
    targetTodo.completed =true;
    //this.todos.at(index)?.completed===true;
  } 

  addTodo():void
  {
    let newTodo: Todo={...this.formTodo}
    this.todos.push(newTodo) 
  }

}


