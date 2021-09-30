import { ContatoTipoService } from './../../../cadastros/contato-tipo/service/contato-tipo.service';
import { ContatoTipo } from './../../../cadastros/contato-tipo/model/contato-tipo.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteContatoInput } from '../model/cliente-contato-input.model';
import { ClienteContatoService } from '../service/cliente-contato.service';

@Component({
  selector: 'app-cliente-contato-create',
  templateUrl: './cliente-contato-create.component.html',
  styleUrls: ['./cliente-contato-create.component.css']
})
export class ClienteContatoCreateComponent implements OnInit {

  clienteContato: ClienteContatoInput = {
    tipoContatoId: 0,
    contato: '',
    observacoes: ''
  }

  contatoTipos: ContatoTipo[] = [];

  selected = {
    contatoTipo: 0
  }

  private clienteId = '';

  constructor(private clienteContatoService: ClienteContatoService,
    private contatoTipoService: ContatoTipoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string

    this.contatoTipoService.read().subscribe(contatoTipos => {
      this.contatoTipos = contatoTipos
    })
  }

  create(): void{
    this.clienteContato.tipoContatoId = this.selected.contatoTipo

    this.clienteContatoService.create(this.clienteId, this.clienteContato).subscribe(() => {
      this.messageService.showMessage('Contato de cliente criado com sucesso')
      const uri = `/clientes/${this.clienteId}/contatos`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `/clientes/${this.clienteId}/contatos`
    this.router.navigate([uri])
  }

}
