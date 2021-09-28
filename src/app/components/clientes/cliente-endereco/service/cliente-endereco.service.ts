import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ClienteEnderecoInput } from '../model/cliente-endereco-input.model';
import { ClienteEndereco } from '../model/cliente-endereco.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteEnderecoService {

  baseUrl = `${environment.BASE_URL}clientes/`
  finalUrl = '/enderecos/'

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(clienteId: string): Observable<ClienteEndereco[]> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.get<ClienteEndereco[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(clienteId: string, id: string): Observable<ClienteEndereco> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.get<ClienteEndereco>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(clienteId: string, clienteEnderecoInput: ClienteEnderecoInput): Observable<ClienteEndereco> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.post<ClienteEndereco>(url, clienteEnderecoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(clienteId: string, id: string): Observable<ClienteEndereco> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.delete<ClienteEndereco>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(clienteId: string, id: string, clienteEnderecoInput: ClienteEnderecoInput): Observable<ClienteEndereco> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.put<ClienteEndereco>(url, clienteEnderecoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
