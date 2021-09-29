import { Component, OnInit } from '@angular/core';
import { ContatoTipo } from 'src/app/components/cadastros/contato-tipo/model/contato-tipo.model';
import { ClienteContatoService } from '../service/cliente-contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteContatoInput } from '../model/cliente-contato-input.model';
import { ContatoTipoService } from 'src/app/components/cadastros/contato-tipo/service/contato-tipo.service';

@Component({
  selector: 'app-cliente-contato-update',
  templateUrl: './cliente-contato-update.component.html',
  styleUrls: ['./cliente-contato-update.component.css']
})
export class ClienteContatoUpdateComponent implements OnInit {

  clienteContato: ClienteContatoInput = {
    tipoContatoId: 0,
    contato: '',
    observacoes: ''
  }

  clienteId = '';
  id = '';

  contatoTipos: ContatoTipo[] = [];

  selected = {
    contatoTipo: 0
  }

  constructor(private contatoTipoService: ContatoTipoService,
    private clienteContatoService: ClienteContatoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.id = this.route.snapshot.paramMap.get('id') as string

    this.contatoTipoService.read().subscribe(contatoTipos => {
      this.contatoTipos = contatoTipos
    })

    this.clienteContatoService.readById(this.clienteId, this.id).subscribe(clienteContato => {
      this.clienteContato = {
        tipoContatoId: this.contatoTipos.find(r => r.nome === clienteContato.tipoContatoNome)?.id || 0,
        contato: clienteContato.contato,
        observacoes: clienteContato.observacoes
      }

      this.selected = {
        contatoTipo: this.clienteContato.tipoContatoId,
      }
    })

  }

  update(): void{
    this.clienteContato.tipoContatoId = this.selected.contatoTipo

    this.clienteContatoService.update(this.clienteId, this.id, this.clienteContato).subscribe(() => {
      this.messageService.showMessage("Contato do cliente atualizado com sucesso.")
      const uri = `clientes/contatos/${this.clienteId}`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/contatos/${this.clienteId}`
    this.router.navigate([uri])
  }

}
