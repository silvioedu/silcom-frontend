import { ClienteInput } from './../model/cliente-input.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ramo } from 'src/app/components/cadastros/ramo/model/ramo.model';
import { RamoService } from 'src/app/components/cadastros/ramo/service/ramo.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: ClienteInput = {
    razaoSocial: '',
    nomeFantasia: '',
    ramoId: 0,
    tipoPessoa: '',
    observacoes: ''
  }

  ramos: Ramo[] = [];

  selected = {
    ramo: 0,
    tipoPessoa: ''
  }

  constructor(private clienteService: ClienteService,
    private ramoService: RamoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.ramoService.read().subscribe(ramo => {
      this.ramos = ramo
    })
  }

  create(): void{
    this.cliente.ramoId = this.selected.ramo
    this.cliente.tipoPessoa = this.selected.tipoPessoa

    this.clienteService.create(this.cliente).subscribe(() => {
      this.messageService.showMessage('Cliente criado com sucesso')
      this.router.navigate(['clientes'])
    })
  }

  cancel(): void{
    this.router.navigate(['clientes'])
  }

}
