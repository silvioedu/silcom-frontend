import { VendaStatus } from './../../cliente-venda/model/venda-status.enum';
import { ClienteVendaItemDeleteComponent } from './../cliente-venda-item-delete/cliente-venda-item-delete.component';
import { ClienteVendaItemCreateComponent } from './../cliente-venda-item-create/cliente-venda-item-create.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ClienteVendaItem } from '../model/cliente-venda-item.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';
import { MatDialog } from '@angular/material/dialog';
import { ClienteVendaItemUpdateComponent } from '../cliente-venda-item-update/cliente-venda-item-update.component';

@Component({
  selector: 'app-cliente-venda-item-read',
  templateUrl: './cliente-venda-item-read.component.html',
  styleUrls: ['./cliente-venda-item-read.component.css']
})
export class ClienteVendaItemReadComponent implements OnInit {

  @Input() statusVenda: string = ''

  dataSource!: MatTableDataSource<ClienteVendaItem>;

  displayedColumns: string[] = ['id', 'produtoCodigo', 'tamanho', 'quantidade', 'valorUnitario', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''
  vendaId = ''

  constructor(private clienteVendaItemService: ClienteVendaItemService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.refresh()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClienteVendaItemCreateComponent, {
      width: '250px',
      data: {
        clienteId: this.clienteId,
        vendaId: this.vendaId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh()
    });

  }

  refresh() {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string
    this.vendaId = this.route.snapshot.paramMap.get('vendaId')  as string

    this.clienteVendaItemService.read(this.clienteId, this.vendaId).subscribe(clienteVendaItems => {
      this.dataSource = new MatTableDataSource(clienteVendaItems)
    })

  }

  delete(id: string) {
    if (this.disableAction()) {
      return
    }

    const dialogRef = this.dialog.open(ClienteVendaItemDeleteComponent, {
      width: '250px',
      data: {
        clienteId: this.clienteId,
        vendaId: this.vendaId,
        itemId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh()
    });
  }

  update(id: string) {
    if (this.disableAction()) {
      return
    }

    const dialogRef = this.dialog.open(ClienteVendaItemUpdateComponent, {
      width: '250px',
      data: {
        clienteId: this.clienteId,
        vendaId: this.vendaId,
        itemId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh()
    });
  }

  disableAction() {
    return this.statusVenda != VendaStatus.CRIADO
  }

}
