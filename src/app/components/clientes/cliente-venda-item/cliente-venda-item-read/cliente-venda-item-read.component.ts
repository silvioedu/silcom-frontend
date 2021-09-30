import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteVendaItem } from '../model/cliente-venda-item.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';

@Component({
  selector: 'app-cliente-venda-item-read',
  templateUrl: './cliente-venda-item-read.component.html',
  styleUrls: ['./cliente-venda-item-read.component.css']
})
export class ClienteVendaItemReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ClienteVendaItem>;

  displayedColumns: string[] = ['id', 'produtoCodigo', 'quantidade', 'valorUnitario', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''
  vendaId = ''

  constructor(private clienteVendaItemService: ClienteVendaItemService,
    private route: ActivatedRoute,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string
    this.vendaId = this.route.snapshot.paramMap.get('vendaId')  as string

    console.log(` VENDA_ITEM: clienteId ${this.clienteId}`)
    console.log(` VENDA_ITEM: vendaId ${this.vendaId}`)
    this.clienteVendaItemService.read(this.clienteId, this.vendaId).subscribe(clienteVendaItems => {
      this.dataSource = new MatTableDataSource(clienteVendaItems)
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

}
