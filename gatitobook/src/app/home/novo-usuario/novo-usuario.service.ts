import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: String): Observable<any> {
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
