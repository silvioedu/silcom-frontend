import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteEndereco } from '../model/cliente-endereco.model';
import { ClienteEnderecoService } from '../service/cliente-endereco.service';

@Component({
  selector: 'app-cliente-endereco-delete',
  templateUrl: './cliente-endereco-delete.component.html',
  styleUrls: ['./cliente-endereco-delete.component.css']
})
export class ClienteEnderecoDeleteComponent implements OnInit {

  clienteEndereco: ClienteEndereco = {
    id: 0,
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    observacoes: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  private clienteId = ''
  private id = ''

  constructor(private clienteEnderecoService: ClienteEnderecoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.id = this.route.snapshot.paramMap.get('id') as string

    this.clienteEnderecoService.readById(this.clienteId, this.id).subscribe(clienteEndereco => {
      this.clienteEndereco = clienteEndereco
    })
  }

  delete(): void {
    this.clienteEnderecoService.delete(this.clienteId, this.id).subscribe(() => {
      this.messageService.showMessage("Endereço do cliente deletado com sucesso.")
      const uri = `clientes/enderecos/${this.clienteId}`
      this.router.navigate([uri])
    })
  }

  cancel(): void {
    const uri = `clientes/enderecos/${this.clienteId}`
    this.router.navigate([uri])
  }

}
