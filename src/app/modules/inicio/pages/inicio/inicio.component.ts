import { Component, OnInit } from '@angular/core';
// NUEVA INTERFAZ
import { Perro } from 'src/app/models/perro';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Perro[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id: "",
        raza: "",
        descripcion: "Foto",
        imagen:"",
        alt:""
      },
      {
        id: "",
        raza: "",
        descripcion: "Foto",
        imagen:"",
        alt:""
      },
      {
        id: "",
        raza: "",
        descripcion: "Foto",
        imagen:"",
        alt:""
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
