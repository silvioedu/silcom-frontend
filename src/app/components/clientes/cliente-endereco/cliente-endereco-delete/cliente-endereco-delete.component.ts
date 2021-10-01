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
    dataAtualizacao: 0,
    tipoEnderecoNome: ''
  };

  private clienteId = ''
  private enderecoId = ''

  constructor(private clienteEnderecoService: ClienteEnderecoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.enderecoId = this.route.snapshot.paramMap.get('enderecoId') as string

    this.clienteEnderecoService.readById(this.clienteId, this.enderecoId).subscribe(clienteEndereco => {
      this.clienteEndereco = clienteEndereco
    })
  }

  delete(): void {
    this.clienteEnderecoService.delete(this.clienteId, this.enderecoId).subscribe(() => {
      this.messageService.showMessage("Endereço do cliente removido com sucesso.")
      const uri = `clientes/${this.clienteId}/enderecos`
      this.router.navigate([uri])
    })
  }

  cancel(): void {
    const uri = `clientes/${this.clienteId}/enderecos`
    this.router.navigate([uri])
  }

}
