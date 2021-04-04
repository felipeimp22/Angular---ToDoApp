import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  name = 'teste'

  itemsArr = ["teste", "teste2", "teste3"]



  toDo = ''
  toDoArr: any = []

  addToDo() {
    let toDoVar = this.toDo
    this.toDoArr.push(toDoVar)
    this.toDo = ''
  }

  remove(i: any) {
    this.toDoArr.splice(i, 1)
  }

}
