import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { EnderecoTipoInput } from '../model/endereco-tipo-input.model';
import { EnderecoTipo } from '../model/endereco-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoTipoService {

  baseUrl = `${environment.BASE_URL}cadastros/enderecos-tipos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<EnderecoTipo[]> {
    return this.httpClient.get<EnderecoTipo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<EnderecoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<EnderecoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(enderecoTipo: EnderecoTipoInput): Observable<EnderecoTipo> {
    return this.httpClient.post<EnderecoTipo>(this.baseUrl, enderecoTipo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<EnderecoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<EnderecoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(enderecoTipo: EnderecoTipo): Observable<EnderecoTipo> {
    const enderecoTipoInput: EnderecoTipoInput = {
      nome: enderecoTipo.nome
    }

    const url = `${this.baseUrl}/${enderecoTipo.id}`
    return this.httpClient.put<EnderecoTipo>(url, enderecoTipoInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
