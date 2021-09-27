import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteContato } from '../model/cliente-contato.model';
import { ClienteContatoService } from '../service/cliente-contato.service';

@Component({
  selector: 'app-cliente-contato-read',
  templateUrl: './cliente-contato-read.component.html',
  styleUrls: ['./cliente-contato-read.component.css']
})
export class ClienteContatoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ClienteContato>;

  displayedColumns: string[] = ['id', 'tipoContatoNome', 'contato', 'observacoes', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''

  constructor(private clienteContatoService: ClienteContatoService,
    private route: ActivatedRoute,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string

    this.clienteContatoService.read(this.clienteId).subscribe(clienteContatos => {
      this.dataSource = new MatTableDataSource(clienteContatos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    const uri = `clientes/contatos/${this.clienteId}/create`
    this.router.navigate([uri])
  }

  cancel(): void {
    this.router.navigate(['clientes/'])
  }

}
