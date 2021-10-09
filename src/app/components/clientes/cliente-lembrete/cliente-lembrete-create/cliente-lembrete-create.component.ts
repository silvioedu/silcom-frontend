import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LembreteTipo } from 'src/app/components/cadastros/lembrete-tipo/model/lembrete-tipo.model';
import { LembreteTipoService } from 'src/app/components/cadastros/lembrete-tipo/service/lembrete-tipo.service';
import { DatepickerService } from 'src/app/components/shared/service/datepicker.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteLembreteInput } from '../model/cliente-lembrete-input.model';
import { ClienteLembreteService } from '../service/cliente-lembrete.service';

@Component({
  selector: 'app-cliente-lembrete-create',
  templateUrl: './cliente-lembrete-create.component.html',
  styleUrls: ['./cliente-lembrete-create.component.css']
})
export class ClienteLembreteCreateComponent implements OnInit {

  clienteLembrete: ClienteLembreteInput = {
    tipoLembreteId: 0,
    dataEvento: '',
    observacoes: ''
  }

  lembreteTipos: LembreteTipo[] = [];

  selected = {
    lembreteTipo: 0,
    dataEvento : ''
  }

  private clienteId = '';

  constructor(private clienteLembreteService: ClienteLembreteService,
    private lembreteTipoService: LembreteTipoService,
    private route: ActivatedRoute,
    private router: Router,
    private datepickerService: DatepickerService,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string

    this.lembreteTipoService.read().subscribe(lembreteTipos => {
      this.lembreteTipos = lembreteTipos
    })

  }

  create(): void{
    this.clienteLembrete.tipoLembreteId = this.selected.lembreteTipo

    this.clienteLembreteService.create(this.clienteId, this.clienteLembrete).subscribe(() => {
      this.messageService.showMessage('Lembrete de cliente criado com sucesso')
      const uri = `clientes/${this.clienteId}/lembretes`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/${this.clienteId}/lembretes`
    this.router.navigate([uri])
  }

  calculateDataEvento() {
    const intervalo = this.lembreteTipos.find(l => l.id === this.selected.lembreteTipo)?.intervalo || 0
    const newDate = new Date()
    newDate.setDate( newDate.getDate() + (intervalo > 0 ? intervalo + 1 : intervalo) )
    this.clienteLembrete.dataEvento = this.datepickerService.convertFromFullDateToDate(newDate)
  }

  formatData() {

    this.clienteLembrete.dataEvento = this.clienteLembrete.dataEvento.replace(/[.,-]/gi,'/')
    const regex = /^\d{2}([./-])\d{2}\1\d{4}$/
    if (!this.clienteLembrete.dataEvento.match(regex)) {
      this.clienteLembrete.dataEvento = ''
    }

  }
}
