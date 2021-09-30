import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { ClienteVendaItemInput } from '../model/cliente-venda-item-input.model';
import { ClienteVendaItem } from '../model/cliente-venda-item.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteVendaItemService {

  baseUrl = `${environment.BASE_URL}clientes/`
  midUrl = '/vendas/'
  finalUrl = '/itens/'

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(clienteId: string, vendaId: string): Observable<ClienteVendaItem[]> {
    const url = `${this.baseUrl + clienteId + this.midUrl + vendaId + this.finalUrl}`
    return this.httpClient.get<ClienteVendaItem[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  // readById(clienteId: string, id: string): Observable<ClienteVendaItem> {
  //   const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
  //   return this.httpClient.get<ClienteVendaItem>(url).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandlerService.errorHandler(e))
  //   )
  // }

  // create(clienteId: string, clienteVendaInput: ClienteVendaItemInput): Observable<ClienteVendaItem> {
  //   const url = `${this.baseUrl + clienteId + this.finalUrl}`
  //   return this.httpClient.post<ClienteVendaItem>(url, clienteVendaInput).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandlerService.errorHandler(e))
  //   )
  // }

  // delete(clienteId: string, id: string): Observable<ClienteVendaItem> {
  //   const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
  //   return this.httpClient.delete<ClienteVendaItem>(url).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandlerService.errorHandler(e))
  //   )
  // }

  // update(clienteId: string, id: string, clienteVendaInput: ClienteVendaItemInput): Observable<ClienteVendaItem> {
  //   const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
  //   return this.httpClient.put<ClienteVendaItem>(url, clienteVendaInput).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandlerService.errorHandler(e))
  //   )
  // }
}
