import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaCepService } from 'src/app/components/shared/service/consulta-cep.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteEnderecoInput } from '../model/cliente-endereco-input.model';
import { ClienteEnderecoService } from '../service/cliente-endereco.service';

@Component({
  selector: 'app-cliente-endereco-create',
  templateUrl: './cliente-endereco-create.component.html',
  styleUrls: ['./cliente-endereco-create.component.css']
})
export class ClienteEnderecoCreateComponent implements OnInit {

  clienteEndereco: ClienteEnderecoInput = {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    observacoes: ''
  }

  private clienteId = '';

  constructor(private clienteEnderecoService: ClienteEnderecoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private consultaCepService: ConsultaCepService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
  }

  create(): void{
    this.clienteEnderecoService.create(this.clienteId, this.clienteEndereco).subscribe(() => {
      this.messageService.showMessage('Endereço de cliente criado com sucesso')
      const uri = `clientes/${this.clienteId}/enderecos`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/${this.clienteId}/enderecos`
    this.router.navigate([uri])
  }

  findCep(): void {
    this.consultaCepService.find(this.clienteEndereco.cep).subscribe(dados => {
      this.clienteEndereco.cep = dados.cep
      this.clienteEndereco.logradouro = dados.logradouro
      this.clienteEndereco.bairro = dados.bairro
      this.clienteEndereco.cidade = dados.localidade
      this.clienteEndereco.estado = dados.uf
    })
  }
}
