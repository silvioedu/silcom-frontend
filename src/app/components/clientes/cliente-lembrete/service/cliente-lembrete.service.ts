import { DatepickerService } from 'src/app/components/shared/service/datepicker.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { ClienteLembreteInput } from '../model/cliente-lembrete-input.model';
import { ClienteLembrete } from '../model/cliente-lembrete.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteLembreteService {

  baseUrl = `${environment.BASE_URL}clientes/`
  finalUrl = '/lembretes/'

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private datepickerService: DatepickerService) {
      // intentionally unscoped
  }

  read(clienteId: string): Observable<ClienteLembrete[]> {
    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.get<ClienteLembrete[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  readById(clienteId: string, id: string): Observable<ClienteLembrete> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.get<ClienteLembrete>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  create(clienteId: string, clienteLembreteInput: ClienteLembreteInput): Observable<ClienteLembrete> {
    clienteLembreteInput.dataEvento = this.datepickerService.convertBRDateToUSDate(clienteLembreteInput.dataEvento)

    const url = `${this.baseUrl + clienteId + this.finalUrl}`
    return this.httpClient.post<ClienteLembrete>(url, clienteLembreteInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  delete(clienteId: string, id: string): Observable<ClienteLembrete> {
    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.delete<ClienteLembrete>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

  update(clienteId: string, id: string, clienteLembreteInput: ClienteLembreteInput): Observable<ClienteLembrete> {

    clienteLembreteInput.dataEvento = this.datepickerService.convertBRDateToUSDate(clienteLembreteInput.dataEvento)

    const url = `${this.baseUrl + clienteId + this.finalUrl + id}`
    return this.httpClient.put<ClienteLembrete>(url, clienteLembreteInput).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }
}
