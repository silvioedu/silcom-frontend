import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteVenda } from '../model/cliente-venda.model';
import { ClienteVendaService } from '../service/cliente-venda.service';

@Component({
  selector: 'app-cliente-venda-read',
  templateUrl: './cliente-venda-read.component.html',
  styleUrls: ['./cliente-venda-read.component.css']
})
export class ClienteVendaReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ClienteVenda>;

  displayedColumns: string[] = ['id', 'formaPagamentoTipoNome', 'desconto', 'agravo', 'valorTotal', 'emitirNota', 'observacoes', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''

  constructor(private clienteVendaService: ClienteVendaService,
    private route: ActivatedRoute,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string

    this.clienteVendaService.read(this.clienteId).subscribe(clienteVendas => {
      this.dataSource = new MatTableDataSource(clienteVendas)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    const uri = `clientes/vendas/${this.clienteId}/create`
    this.router.navigate([uri])
  }

  cancel(): void {
    this.router.navigate(['clientes/'])
  }

}
