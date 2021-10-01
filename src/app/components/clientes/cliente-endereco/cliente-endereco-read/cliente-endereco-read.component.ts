import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteEndereco } from '../model/cliente-endereco.model';
import { ClienteEnderecoService } from '../service/cliente-endereco.service';

@Component({
  selector: 'app-cliente-endereco-read',
  templateUrl: './cliente-endereco-read.component.html',
  styleUrls: ['./cliente-endereco-read.component.css']
})
export class ClienteEnderecoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ClienteEndereco>;

  displayedColumns: string[] = ['id', 'tipoEnderecoNome', 'cep', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'observacoes', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''

  constructor(private clienteEnderecoService: ClienteEnderecoService,
    private route: ActivatedRoute,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string

    this.clienteEnderecoService.read(this.clienteId).subscribe(clienteEnderecos => {
      this.dataSource = new MatTableDataSource(clienteEnderecos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    const uri = `clientes/${this.clienteId}/enderecos/create`
    this.router.navigate([uri])
  }

  cancel(): void {
    this.router.navigate(['clientes/'])
  }

}
