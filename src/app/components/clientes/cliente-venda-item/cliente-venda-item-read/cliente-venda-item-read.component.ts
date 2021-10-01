import { ClienteVendaItemCreateComponent } from './../cliente-venda-item-create/cliente-venda-item-create.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteVendaItem } from '../model/cliente-venda-item.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';
import { MatDialog } from '@angular/material/dialog';

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
    private router: Router,
    public dialog: MatDialog) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string
    this.vendaId = this.route.snapshot.paramMap.get('vendaId')  as string

    this.clienteVendaItemService.read(this.clienteId, this.vendaId).subscribe(clienteVendaItems => {
      this.dataSource = new MatTableDataSource(clienteVendaItems)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClienteVendaItemCreateComponent, {
      width: '250px',
      data: {produtoId: 0, quantidade: 1, valorUnitario: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
