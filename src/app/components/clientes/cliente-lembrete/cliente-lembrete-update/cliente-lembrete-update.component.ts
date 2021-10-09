import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LembreteTipo } from 'src/app/components/cadastros/lembrete-tipo/model/lembrete-tipo.model';
import { LembreteTipoService } from 'src/app/components/cadastros/lembrete-tipo/service/lembrete-tipo.service';
import { DatepickerService } from 'src/app/components/shared/service/datepicker.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteLembreteInput } from '../model/cliente-lembrete-input.model';
import { ClienteLembreteService } from '../service/cliente-lembrete.service';

@Component({
  selector: 'app-cliente-lembrete-update',
  templateUrl: './cliente-lembrete-update.component.html',
  styleUrls: ['./cliente-lembrete-update.component.css']
})
export class ClienteLembreteUpdateComponent implements OnInit {

  clienteLembrete: ClienteLembreteInput = {
    tipoLembreteId: 0,
    dataEvento: '',
    observacoes: ''
  }

  clienteId = '';
  lembreteId = '';

  lembreteTipos: LembreteTipo[] = [];

  selected = {
    lembreteTipo: 0
  }

  constructor(private lembreteTipoService: LembreteTipoService,
    private clienteLembreteService: ClienteLembreteService,
    private datepickerService: DatepickerService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  async ngOnInit() {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.lembreteId = this.route.snapshot.paramMap.get('lembreteId') as string

    await this.preLoad()

    this.clienteLembreteService.readById(this.clienteId, this.lembreteId).subscribe(clienteLembrete => {
      this.clienteLembrete = {
        tipoLembreteId: this.lembreteTipos.find(r => r.nome === clienteLembrete.tipoLembreteNome)?.id || 0,
        dataEvento: this.datepickerService.convertUSDateToBRDate(clienteLembrete.dataEvento),
        observacoes: clienteLembrete.observacoes
      }

      this.selected = {
        lembreteTipo: this.clienteLembrete.tipoLembreteId,
      }

    })

  }

  async preLoad() {
    this.lembreteTipos = await this.lembreteTipoService.read().toPromise();
  }

  update(): void{
    this.clienteLembrete.tipoLembreteId = this.selected.lembreteTipo

    this.clienteLembreteService.update(this.clienteId, this.lembreteId, this.clienteLembrete).subscribe(() => {
      this.messageService.showMessage("Lembrete do cliente atualizado com sucesso.")
      const uri = `clientes/${this.clienteId}/lembretes`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/${this.clienteId}/lembretes`
    this.router.navigate([uri])
  }

  formatData() {

    this.clienteLembrete.dataEvento = this.clienteLembrete.dataEvento.replace(/[.,-]/gi,'/')
    const regex = /^\d{2}([./-])\d{2}\1\d{4}$/
    if (!this.clienteLembrete.dataEvento.match(regex)) {
      this.clienteLembrete.dataEvento = ''
    }

  }

}
