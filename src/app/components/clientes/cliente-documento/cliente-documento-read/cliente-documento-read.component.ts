import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteDocumento } from '../model/cliente-documento.model';
import { ClienteDocumentoService } from '../service/cliente-documento.service';

@Component({
  selector: 'app-cliente-documento-read',
  templateUrl: './cliente-documento-read.component.html',
  styleUrls: ['./cliente-documento-read.component.css']
})
export class ClienteDocumentoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ClienteDocumento>;

  displayedColumns: string[] = ['id', 'tipoDocumentoNome', 'documento', 'isento', 'observacoes', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''

  constructor(private clienteDocumentoService: ClienteDocumentoService,
    private route: ActivatedRoute,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string

    this.clienteDocumentoService.read(this.clienteId).subscribe(clienteDocumentos => {
      this.dataSource = new MatTableDataSource(clienteDocumentos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    const uri = `clientes/${this.clienteId}/documentos/create`
    this.router.navigate([uri])
  }

  cancel(): void {
    this.router.navigate(['clientes/'])
  }

}
