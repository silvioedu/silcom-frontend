import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentoTipo } from 'src/app/components/cadastros/documento-tipo/model/documento-tipo.model';
import { DocumentoTipoService } from 'src/app/components/cadastros/documento-tipo/service/documento-tipo.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteDocumentoInput } from '../model/cliente-documento-input.model';
import { ClienteDocumentoService } from '../service/cliente-documento.service';

@Component({
  selector: 'app-cliente-documento-update',
  templateUrl: './cliente-documento-update.component.html',
  styleUrls: ['./cliente-documento-update.component.css']
})
export class ClienteDocumentoUpdateComponent implements OnInit {

  clienteDocumento: ClienteDocumentoInput = {
    tipoDocumentoId: 0,
    documento: '',
    isento: false,
    observacoes: ''
  }

  clienteId = '';
  documentoId = '';

  documentoTipos: DocumentoTipo[] = [];

  selected = {
    documentoTipo: 0,
    isento: ''
  }

  constructor(private documentoTipoService: DocumentoTipoService,
    private clienteDocumentoService: ClienteDocumentoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  async ngOnInit() {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.documentoId = this.route.snapshot.paramMap.get('documentoId') as string

    await this.preLoad()

    this.clienteDocumentoService.readById(this.clienteId, this.documentoId).subscribe(clienteDocumento => {
      this.clienteDocumento = {
        tipoDocumentoId: this.documentoTipos.find(r => r.nome === clienteDocumento.tipoDocumentoNome)?.id || 0,
        documento: clienteDocumento.documento,
        isento: clienteDocumento.isento,
        observacoes: clienteDocumento.observacoes
      }

      this.selected = {
        documentoTipo: this.clienteDocumento.tipoDocumentoId,
        isento: this.clienteDocumento.isento + ''
      }

    })

  }

  async preLoad() {
    this.documentoTipos = await this.documentoTipoService.read().toPromise();
  }

  update(): void{
    this.clienteDocumento.tipoDocumentoId = this.selected.documentoTipo
    this.clienteDocumento.isento = this.selected.isento === 'false'? false : true

    this.clienteDocumentoService.update(this.clienteId, this.documentoId, this.clienteDocumento).subscribe(() => {
      this.messageService.showMessage("Documento do cliente atualizado com sucesso.")
      const uri = `clientes/${this.clienteId}/documentos`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/${this.clienteId}/documentos`
    this.router.navigate([uri])
  }

}
