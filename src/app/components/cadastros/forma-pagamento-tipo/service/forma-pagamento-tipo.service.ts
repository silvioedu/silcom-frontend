import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { FormaPagamentoTipoInput } from '../model/forma-pagamento-tipo-input.model';
import { FormaPagamentoTipo } from '../model/forma-pagamento-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoTipoService {

  baseUrl = `${environment.BASE_URL}cadastros/formas-pagamentos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<FormaPagamentoTipo[]> {
    return this.httpClient.get<FormaPagamentoTipo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<FormaPagamentoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<FormaPagamentoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(formaPagamentoTipo: FormaPagamentoTipoInput): Observable<FormaPagamentoTipo> {
    return this.httpClient.post<FormaPagamentoTipo>(this.baseUrl, formaPagamentoTipo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<FormaPagamentoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<FormaPagamentoTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(id: string, formaPagamentoTipo: FormaPagamentoTipoInput): Observable<FormaPagamentoTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.put<FormaPagamentoTipo>(url, formaPagamentoTipo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
