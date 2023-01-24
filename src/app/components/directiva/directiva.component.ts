import { Component } from '@angular/core';
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {


  listaEstudiantes : Array<Estudiante> = [
    {
    nombre:'Jose',
    edad:25,
    estaActivo:true,
    cursada:231,
    materia:'Angular',
    },
    {
    nombre:'Laura',
    edad:25,
    estaActivo:true,
    cursada:231,
    materia:'Angular',
    },
    {
    nombre:'Tomas',
    edad:25,
    estaActivo:false,
    cursada:231,
    materia:'React',
    }
  ]
}
