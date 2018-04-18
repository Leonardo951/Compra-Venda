import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

    usuarios = [];

  constructor( private usuarioservice: UsuariosService) {

      this.usuarios = this.usuarioservice.getUsuarios();
  }

  ngOnInit() {
  }

}
