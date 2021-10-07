import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaCepService } from './consulta-cep.service';
import { ErrorHandlerService } from './error-handler.service';
import { MessageService } from './message.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ConsultaCepService,
    ErrorHandlerService,
    MessageService
  ]
})
export class ServiceModule { }
