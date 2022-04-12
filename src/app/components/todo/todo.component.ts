import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modele/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos?:Todo[]
  inputTodo:string =""
  constructor() { }

  ngOnInit(): void {
    this.todos=[    ]
  }
  todone (id:number){
    this.todos?.map((v,i)=>
    {
      if(id==i)
      {
        v.competed = !v.competed;
      }
    })
  }
  tosupprime(id:number)
  {
   this.todos= this.todos?.filter((v,i)=> i!==id)
  }
  addtodo()
  {
    this.todos?.push({
      content:this.inputTodo,
      competed:false
    })
    this.inputTodo=""
  }

}
