import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoTipo } from 'src/app/components/cadastros/documento-tipo/model/documento-tipo.model';
import { DocumentoTipoService } from 'src/app/components/cadastros/documento-tipo/service/documento-tipo.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteDocumentoInput } from '../model/cliente-documento-input.model';
import { ClienteDocumentoService } from '../service/cliente-documento.service';

@Component({
  selector: 'app-cliente-documento-create',
  templateUrl: './cliente-documento-create.component.html',
  styleUrls: ['./cliente-documento-create.component.css']
})
export class ClienteDocumentoCreateComponent implements OnInit {

  clienteDocumento: ClienteDocumentoInput = {
    tipoDocumentoId: 0,
    documento: '',
    isento: false,
    observacoes: ''
  }

  documentoTipos: DocumentoTipo[] = [];

  selected = {
    documentoTipo: 0,
    isento: ''
  }

  private clienteId = '';

  constructor(private clienteDocumentoService: ClienteDocumentoService,
    private documentoTipoService: DocumentoTipoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string

    this.documentoTipoService.read().subscribe(documentoTipos => {
      this.documentoTipos = documentoTipos
    })
  }

  create(): void{
    this.clienteDocumento.tipoDocumentoId = this.selected.documentoTipo
    this.clienteDocumento.isento = this.selected.isento === 'false'? false : true

    this.clienteDocumentoService.create(this.clienteId, this.clienteDocumento).subscribe(() => {
      this.messageService.showMessage('Documento de cliente criado com sucesso')
      const uri = `clientes/documentos/${this.clienteId}`
      this.router.navigate([uri])    })
  }

  cancel(): void{
    const uri = `clientes/documentos/${this.clienteId}`
    this.router.navigate([uri])
  }

}
