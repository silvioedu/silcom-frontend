import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { LembreteTipoInput } from '../model/lembrete-tipo-input.model';
import { LembreteTipoService } from '../service/lembrete-tipo.service';

@Component({
  selector: 'app-lembrete-tipo-create',
  templateUrl: './lembrete-tipo-create.component.html',
  styleUrls: ['./lembrete-tipo-create.component.css']
})
export class LembreteTipoCreateComponent implements OnInit {

  lembreteTipo: LembreteTipoInput = {
    nome: '',
    intervalo: 0
  }

  constructor(private lembreteTipoService: LembreteTipoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.lembreteTipoService.create(this.lembreteTipo).subscribe(() => {
      this.messageService.showMessage('Tipo de lembrete criado com sucesso')
      this.router.navigate(['cadastros/lembretes-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/lembretes-tipos'])
  }

}
