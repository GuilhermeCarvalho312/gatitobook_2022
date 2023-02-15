import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais } from './animais';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public listaDoUsuarios(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken(),
      headers = new HttpHeaders().append('x-access-token', token);

    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}