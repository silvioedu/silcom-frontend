import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultaCepService } from 'src/app/components/shared/service/consulta-cep.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteEnderecoInput } from '../model/cliente-endereco-input.model';
import { ClienteEnderecoService } from '../service/cliente-endereco.service';

@Component({
  selector: 'app-cliente-endereco-update',
  templateUrl: './cliente-endereco-update.component.html',
  styleUrls: ['./cliente-endereco-update.component.css']
})
export class ClienteEnderecoUpdateComponent implements OnInit {

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

  clienteId = '';
  enderecoId = '';

  constructor(private clienteEnderecoService: ClienteEnderecoService,
    private consultaCepService: ConsultaCepService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.enderecoId = this.route.snapshot.paramMap.get('enderecoId') as string

    this.clienteEnderecoService.readById(this.clienteId, this.enderecoId).subscribe(clienteEndereco => {
      this.clienteEndereco = {
        cep: clienteEndereco.cep,
        logradouro: clienteEndereco.logradouro,
        numero: clienteEndereco.numero,
        complemento: clienteEndereco.complemento,
        bairro: clienteEndereco.bairro,
        cidade: clienteEndereco.cidade,
        estado: clienteEndereco.estado,
        observacoes: clienteEndereco.observacoes
      }

    })

  }

  update(): void{
    this.clienteEnderecoService.update(this.clienteId, this.enderecoId, this.clienteEndereco).subscribe(() => {
      this.messageService.showMessage("Endereco do cliente atualizado com sucesso.")
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
