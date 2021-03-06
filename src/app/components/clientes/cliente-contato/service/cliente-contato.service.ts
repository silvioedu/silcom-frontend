import { ClienteContato } from './../model/cliente-contato.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { ClienteContatoInput } from '../model/cliente-contato-input.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteContatoService {

  baseUrl = `${environment.BASE_URL}clientes/`
  finalUrl = '/contatos/'

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(clienteId: string): Observable<ClienteContato[]> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.get<ClienteContato[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(clienteId: string, id: string): Observable<ClienteContato> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.get<ClienteContato>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(clienteId: string, clienteContatoInput: ClienteContatoInput): Observable<ClienteContato> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.post<ClienteContato>(url, clienteContatoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(clienteId: string, id: string): Observable<ClienteContato> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.delete<ClienteContato>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(clienteId: string, id: string, clienteContatoInput: ClienteContatoInput): Observable<ClienteContato> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.put<ClienteContato>(url, clienteContatoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
