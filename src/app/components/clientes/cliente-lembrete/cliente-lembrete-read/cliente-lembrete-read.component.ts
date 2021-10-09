import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteLembrete } from '../model/cliente-lembrete.model';
import { ClienteLembreteService } from '../service/cliente-lembrete.service';

@Component({
  selector: 'app-cliente-lembrete-read',
  templateUrl: './cliente-lembrete-read.component.html',
  styleUrls: ['./cliente-lembrete-read.component.css']
})
export class ClienteLembreteReadComponent implements OnInit {

  dataSource!: MatTableDataSource<ClienteLembrete>;

  displayedColumns: string[] = ['id', 'tipoLembreteNome', 'dataEvento', 'observacoes', 'dataCriacao', 'dataAtualizacao', 'acoes']

  clienteId = ''

  constructor(private clienteLembreteService: ClienteLembreteService,
    private route: ActivatedRoute,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId')  as string

    this.clienteLembreteService.read(this.clienteId).subscribe(clienteLembretes => {
      this.dataSource = new MatTableDataSource(clienteLembretes)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    const uri = `clientes/${this.clienteId}/lembretes/create`
    this.router.navigate([uri])
  }

  cancel(): void {
    this.router.navigate(['clientes/'])
  }

}
