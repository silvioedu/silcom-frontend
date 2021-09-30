import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteDocumento } from '../model/cliente-documento.model';
import { ClienteDocumentoService } from '../service/cliente-documento.service';

@Component({
  selector: 'app-cliente-documento-delete',
  templateUrl: './cliente-documento-delete.component.html',
  styleUrls: ['./cliente-documento-delete.component.css']
})
export class ClienteDocumentoDeleteComponent implements OnInit {

  clienteDocumento: ClienteDocumento = {
    id: 0,
    tipoDocumentoNome: '',
    documento: '',
    isento: false,
    observacoes: '',
    dataCriacao: 0,
    dataAtualizacao: 0,
  };

  private clienteId = ''
  private documentoId = ''

  constructor(private clienteDocumentoService: ClienteDocumentoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.documentoId = this.route.snapshot.paramMap.get('documentoId') as string

    this.clienteDocumentoService.readById(this.clienteId, this.documentoId).subscribe(clienteDocumento => {
      this.clienteDocumento = clienteDocumento
    })
  }

  delete(): void {
    this.clienteDocumentoService.delete(this.clienteId, this.documentoId).subscribe(() => {
      this.messageService.showMessage("Documento do cliente removido com sucesso.")
      const uri = `clientes/${this.clienteId}/documentos`
      this.router.navigate([uri])
    })
  }

  cancel(): void {
    const uri = `clientes/${this.clienteId}/documentos`
    this.router.navigate([uri])
  }


}
