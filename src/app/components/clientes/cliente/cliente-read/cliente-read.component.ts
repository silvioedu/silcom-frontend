import { Cliente } from './../model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  dataSource!: MatTableDataSource<Cliente>;

  displayedColumns: string[] = ['id', 'razaoSocial', 'nomeFantasia', 'ramoNome', 'tipoPessoa', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private clienteService: ClienteService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.dataSource = new MatTableDataSource(clientes)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['clientes/create'])
  }

}
