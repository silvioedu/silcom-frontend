import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { LembreteTipoInput } from '../model/lembrete-tipo-input.model';
import { LembreteTipo } from '../model/lembrete-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class LembreteTipoService {

  baseUrl = `${environment.BASE_URL}cadastros/lembretes-tipos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<LembreteTipo[]> {
    return this.httpClient.get<LembreteTipo[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(id: string): Observable<LembreteTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<LembreteTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(lembreteTipo: LembreteTipoInput): Observable<LembreteTipo> {
    return this.httpClient.post<LembreteTipo>(this.baseUrl, lembreteTipo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(id: string): Observable<LembreteTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<LembreteTipo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(id: string, lembreteTipo: LembreteTipoInput): Observable<LembreteTipo> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.put<LembreteTipo>(url, lembreteTipo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
