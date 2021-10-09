import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatepickerService } from 'src/app/components/shared/service/datepicker.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteLembrete } from '../model/cliente-lembrete.model';
import { ClienteLembreteService } from '../service/cliente-lembrete.service';

@Component({
  selector: 'app-cliente-lembrete-delete',
  templateUrl: './cliente-lembrete-delete.component.html',
  styleUrls: ['./cliente-lembrete-delete.component.css']
})
export class ClienteLembreteDeleteComponent implements OnInit {

  clienteLembrete: ClienteLembrete = {
    id: 0,
    tipoLembreteNome: '',
    dataEvento: '',
    observacoes: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  private clienteId = ''
  lembreteId = ''

  constructor(private clienteLembreteService: ClienteLembreteService,
    private datepickerService: DatepickerService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.lembreteId = this.route.snapshot.paramMap.get('lembreteId') as string

    this.clienteLembreteService.readById(this.clienteId, this.lembreteId).subscribe(clienteLembrete => {
      this.clienteLembrete = {
        id: clienteLembrete.id,
        tipoLembreteNome: clienteLembrete.tipoLembreteNome,
        dataEvento: this.datepickerService.convertUSDateToBRDate(clienteLembrete.dataEvento),
        observacoes: clienteLembrete.observacoes,
        dataCriacao: clienteLembrete.dataCriacao,
        dataAtualizacao: clienteLembrete.dataAtualizacao
      }
    })

  }

  delete(): void {
    this.clienteLembreteService.delete(this.clienteId, this.lembreteId).subscribe(() => {
      this.messageService.showMessage("Lembrete do cliente removido com sucesso.")
      const uri = `clientes/${this.clienteId}/lembretes`
      this.router.navigate([uri])
    })
  }

  cancel(): void {
    const uri = `clientes/${this.clienteId}/lembretes`
    this.router.navigate([uri])
  }

}
