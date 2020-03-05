import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  taxistas = [];
  taxis = [];
  

  constructor() {
    this.taxis = [
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"},
      {"placa": "AGCDS5A"}
    ];
    this.taxistas = [{
      "idTaxista": 1124076957,
      "nombre": "Eduardo Velasquez Velez"
    },
    {
      "idTaxista": 1037667018,
      "nombre": "Cristian David Vargas Bermúdez"
    },
    {
      "idTaxista": 1128463855,
      "nombre": "Juan Pablo Romero Laverde"
    },{
      "idTaxista": 1124076957,
      "nombre": "Eduardo Velasquez Velez"
    },
    {
      "idTaxista": 1037667018,
      "nombre": "Cristian David Vargas Bermúdez"
    },
    {
      "idTaxista": 1128463855,
      "nombre": "Juan Pablo Romero Laverde"
    },{
      "idTaxista": 1124076957,
      "nombre": "Eduardo Velasquez Velez"
    },
    {
      "idTaxista": 1037667018,
      "nombre": "Cristian David Vargas Bermúdez"
    },
    {
      "idTaxista": 1128463855,
      "nombre": "Juan Pablo Romero Laverde"
    },{
      "idTaxista": 1124076957,
      "nombre": "Eduardo Velasquez Velez"
    },
    {
      "idTaxista": 1037667018,
      "nombre": "Cristian David Vargas Bermúdez"
    },
    {
      "idTaxista": 1128463855,
      "nombre": "Juan Pablo Romero Laverde"
    }];
  }

  ngOnInit() {
  }

  funcion() {
    alert('hola');
  }

  infoTaxista(dni: string){
    
  }

}
