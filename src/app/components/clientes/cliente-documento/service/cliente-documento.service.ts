import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ClienteDocumentoInput } from '../model/cliente-documento-input.model';
import { ClienteDocumento } from '../model/cliente-documento.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteDocumentoService {

  baseUrl = `${environment.BASE_URL}clientes/`
  finalUrl = '/documentos/'

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(clienteId: string): Observable<ClienteDocumento[]> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.get<ClienteDocumento[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(clienteId: string, id: string): Observable<ClienteDocumento> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.get<ClienteDocumento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(clienteId: string, clienteDocumentoInput: ClienteDocumentoInput): Observable<ClienteDocumento> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.post<ClienteDocumento>(url, clienteDocumentoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(clienteId: string, id: string): Observable<ClienteDocumento> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.delete<ClienteDocumento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(clienteId: string, id: string, clienteDocumentoInput: ClienteDocumentoInput): Observable<ClienteDocumento> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.put<ClienteDocumento>(url, clienteDocumentoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
