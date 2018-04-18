import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  constructor() { }

  getUsuarios() {
    return [
        {
          nome:'fulano',
          email: 'fulano@tesste',
          perfil: 'vendedor',
        },
      {
          nome:'ciclano',
          email: 'ciclano@tesste',
          perfil: 'adm',
      }
    ]
      )
}
