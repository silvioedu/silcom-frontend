import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LembreteTipo } from '../model/lembrete-tipo.model';
import { LembreteTipoService } from '../service/lembrete-tipo.service';

@Component({
  selector: 'app-lembrete-tipo-read',
  templateUrl: './lembrete-tipo-read.component.html',
  styleUrls: ['./lembrete-tipo-read.component.css']
})
export class LembreteTipoReadComponent implements OnInit {

  dataSource!: MatTableDataSource<LembreteTipo>;

  displayedColumns: string[] = ['id', 'nome', 'intervalo', 'dataCriacao', 'dataAtualizacao', 'acoes']

  constructor(private lembreteTipoService: LembreteTipoService,
    private router: Router) {
    // intentionally unscoped
  }

  ngOnInit(): void {
    this.lembreteTipoService.read().subscribe(ramos => {
      this.dataSource = new MatTableDataSource(ramos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(): void {
    this.router.navigate(['cadastros/lembretes-tipos/create'])
  }

}
