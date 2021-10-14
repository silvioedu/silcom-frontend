import { EmpresaService } from './../../../cadastros/empresa/service/empresa.service';
import { ActivatedRoute } from '@angular/router';
import { VendaReport } from './../model/venda-report.model';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ClienteVendaService } from '../service/cliente-venda.service';
import { Empresa } from 'src/app/components/cadastros/empresa/model/empresa-model';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-venda-summary',
  templateUrl: './cliente-venda-summary.component.html',
  styleUrls: ['./cliente-venda-summary.component.css']
})
export class ClienteVendaSummaryComponent implements OnInit {

  @ViewChild('content', { static: false })
  el!: ElementRef;

  vendaSummary: VendaReport = {
    id: 0,
    dataCriacao: 0,
    formaPagamento: '',
    emitirNota: false,
    status: '',
    clienteRazaoSocial: '',
    documento: '',
    endereco: '',
    email: '',
    telefone: '',
    observacoes: '',
    itens: [],
    valorTotal: 0
  }

  empresa: Empresa = {
    contato: '',
    email: '',
    site: '',
    cnpj: '',
    inscricaoEstadual: ''
  }

  clienteId = ''
  vendaId = ''
  totalItens = 0

  constructor(private clienteVendaService: ClienteVendaService,
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ClienteVendaSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any) { }

  async ngOnInit() {
    this.clienteId = this.param.clienteId
    this.vendaId = this.param.vendaId

    await this.preLoad()
    this.totalItens = this.vendaSummary.itens.map(v => v.quantidade).reduce((acm, act) => acm + act)
  }

  async preLoad(){
    this.vendaSummary = await this.clienteVendaService.readSummary(this.clienteId, this.vendaId).toPromise();
    this.empresa = await this.empresaService.read().toPromise();
  }

  downloadPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4')
    pdf.html(this.el.nativeElement, {
      html2canvas: {
        width: 200
      },
      callback: (pdf) => {
        pdf.save(`Pedido_${this.vendaId}.pdf`)
      }
    })
  }

  close(){
    this.dialogRef.close()
  }

}
