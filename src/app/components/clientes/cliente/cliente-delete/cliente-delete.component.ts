import { Cliente } from './../model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    razaoSocial: '',
    nomeFantasia: '',
    ramoNome: '',
    tipoPessoa: '',
    observacoes: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.clienteService.readById(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  delete(): void {
    this.clienteService.delete(this.cliente.id + '').subscribe(() => {
      this.messageService.showMessage("Cliente deletado com sucesso.")
      this.router.navigate(['clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['clientes'])
  }


}
