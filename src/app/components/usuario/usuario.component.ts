import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  lat: number = 6.268643;
  long: number = -75.570461;


  constructor() {}

  ngOnInit() {}
}
