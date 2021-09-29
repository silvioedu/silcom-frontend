import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ClienteVendaInput } from '../model/cliente-venda-input.model';
import { ClienteVenda } from '../model/cliente-venda.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteVendaService {

  baseUrl = `${environment.BASE_URL}clientes/`
  finalUrl = '/vendas/'

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(clienteId: string): Observable<ClienteVenda[]> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.get<ClienteVenda[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(clienteId: string, id: string): Observable<ClienteVenda> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.get<ClienteVenda>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(clienteId: string, clienteVendaInput: ClienteVendaInput): Observable<ClienteVenda> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.post<ClienteVenda>(url, clienteVendaInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(clienteId: string, id: string): Observable<ClienteVenda> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.delete<ClienteVenda>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(clienteId: string, id: string, clienteVendaInput: ClienteVendaInput): Observable<ClienteVenda> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.put<ClienteVenda>(url, clienteVendaInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
