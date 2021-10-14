import { Empresa } from './../model/empresa-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from 'src/app/components/shared/service/error-handler.service';
import { environment } from 'src/environments/environment';
import { EnderecoTipo } from '../../endereco-tipo/model/endereco-tipo.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseUrl = `${environment.BASE_URL}empresa`

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService) {
      // intentionally unscoped
  }

  read(): Observable<Empresa> {
    return this.httpClient.get<EnderecoTipo>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandlerService.errorHandler(e))
    )
  }

}
