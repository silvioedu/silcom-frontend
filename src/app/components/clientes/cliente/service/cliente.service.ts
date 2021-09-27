import { ClienteInput } from './../model/cliente-input.model';
import { Cliente } from './../model/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = `${environment.BASE_URL}clientes`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(cliente: ClienteInput): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.baseUrl, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(id: number, cliente: ClienteInput): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.put<Cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
