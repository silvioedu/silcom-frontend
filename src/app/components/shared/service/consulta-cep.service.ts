import { MessageService } from 'src/app/components/shared/service/message.service';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { Observable, EMPTY } from 'rxjs';
import { Cep } from './../model/cep.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  private baseURL = `${environment.BASE_URL}querys/enderecos`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService) {
      // intentionally unscoped

  }

  find(cep: string): Observable<Cep>{
    if (cep.length >= 8) {

      const url = `${this.baseURL}/${cep}`
      return this.httpClient.get<Cep>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandlerService.errorHandler(e))
      )
    }
    this.messageService.showMessage("Favor preencher o Cep", true)
    return EMPTY
  }
}
