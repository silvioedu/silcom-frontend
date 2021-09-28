import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormaPagamentoTipo } from '../model/forma-pagamento-tipo.model';
import { FormaPagamentoTipoService } from '../service/forma-pagamento-tipo.service';

@Component({
  selector: 'app-forma-pagamento-tipo-read',
  templateUrl: './forma-pagamento-tipo-read.component.html',
  styleUrls: ['./forma-pagamento-tipo-read.component.css']
})
export class FormaPagamentoTipoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<FormaPagamentoTipo>;

  displayedColumns: string[] = ['id', 'nome', 'desconto', 'agravo', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private formaPagamentoTipoService: FormaPagamentoTipoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.formaPagamentoTipoService.read().subscribe(ramos => {
      this.dataSource = new MatTableDataSource(ramos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/formas-pagamentos-tipos/create'])
  }

}
