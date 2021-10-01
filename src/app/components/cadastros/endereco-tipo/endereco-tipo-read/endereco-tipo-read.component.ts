import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EnderecoTipo } from '../model/endereco-tipo.model';
import { EnderecoTipoService } from '../service/endereco-tipo.service';

@Component({
  selector: 'app-endereco-tipo-read',
  templateUrl: './endereco-tipo-read.component.html',
  styleUrls: ['./endereco-tipo-read.component.css']
})
export class EnderecoTipoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<EnderecoTipo>;

  displayedColumns: string[] = ['id', 'nome', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private enderecoTipoService: EnderecoTipoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.enderecoTipoService.read().subscribe(ramos => {
      this.dataSource = new MatTableDataSource(ramos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/enderecos-tipos/create'])
  }

}
