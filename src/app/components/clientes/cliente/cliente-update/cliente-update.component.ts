import { Component, OnInit } from '@angular/core';
import { Ramo } from 'src/app/components/cadastros/ramo/model/ramo.model';
import { RamoService } from 'src/app/components/cadastros/ramo/service/ramo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteService } from '../service/cliente.service';
import { ClienteInput } from '../model/cliente-input.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: ClienteInput = {
    razaoSocial: '',
    nomeFantasia: '',
    ramoId: 0,
    tipoPessoa: '',
    observacoes: ''
  }

  clienteId: number = 0;
  ramos: Ramo[] = [];

  selected = {
    ramo: 0,
    tipoPessoa: ''
  }

  constructor(private ramoService: RamoService,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = parseInt(this.route.snapshot.paramMap.get('id') as string)

    this.ramoService.read().subscribe(ramos => {
      this.ramos = ramos
    })

    this.clienteService.readById(this.clienteId + '').subscribe(cliente => {
      this.cliente = {
        razaoSocial: cliente.razaoSocial,
        nomeFantasia: cliente.nomeFantasia,
        tipoPessoa: cliente.tipoPessoa,
        ramoId: this.ramos.find(r => r.nome === cliente.ramoNome)?.id || 0,
        observacoes: cliente.observacoes
      }

      this.selected = {
        ramo: this.cliente.ramoId,
        tipoPessoa: this.cliente.tipoPessoa,
      }
    })

  }

  update(): void{
    this.cliente.ramoId = this.selected.ramo
    this.cliente.tipoPessoa = this.selected.tipoPessoa

    this.clienteService.update(this.clienteId, this.cliente).subscribe(() => {
      this.messageService.showMessage("Cliente atualizado com sucesso.")
      this.router.navigate(['clientes'])
    })
  }

  cancel(): void{
    this.router.navigate(['clientes'])
  }

}
