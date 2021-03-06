import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title1 = "Motor de Vistas Pug inmerso en Angular bajo la arquitectura Rest y MVC";
  title:string = 'Angular Crud';
  parrafo= 'implementacion de pug en Angular';
  nombre:string = 'Nombre: ';
  apellido:string = 'Apellido: ';
  email:string = 'E- Mail: ';

  msg:string = '';

    employees = [
    {'name': 'Fazt', cargo: 'manager', email:'email@email.com'},
    {'name': 'Juan', cargo: 'Designer', email:'email@email.com'},
    {'name': 'Pedro', cargo: 'Programmer', email:'email@email.com'}
  ];

  model:any = {};
  model2:any = {};

  hideUpdate:boolean = true;

   addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.cargo = this.employees[i].cargo;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }


}
