import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';

import { ClienteContato } from '../model/cliente-contato.model';
import { ClienteContatoService } from '../service/cliente-contato.service';

@Component({
  selector: 'app-cliente-contato-delete',
  templateUrl: './cliente-contato-delete.component.html',
  styleUrls: ['./cliente-contato-delete.component.css']
})
export class ClienteContatoDeleteComponent implements OnInit {

  clienteContato: ClienteContato = {
    id: 0,
    tipoContatoNome: '',
    contato: '',
    observacoes: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  private clienteId = ''
  private contatoId = ''

  constructor(private clienteContatoService: ClienteContatoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.contatoId = this.route.snapshot.paramMap.get('contatoId') as string

    this.clienteContatoService.readById(this.clienteId, this.contatoId).subscribe(clienteContato => {
      this.clienteContato = clienteContato
    })
  }

  delete(): void {
    this.clienteContatoService.delete(this.clienteId, this.contatoId).subscribe(() => {
      this.messageService.showMessage("Contato do cliente deletado com sucesso.")
      const uri = `clientes/${this.clienteId}/contatos`
      this.router.navigate([uri])
    })
  }

  cancel(): void {
    const uri = `clientes/${this.clienteId}/contatos`
    this.router.navigate([uri])
  }

}
