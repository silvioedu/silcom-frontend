import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { LembreteTipo } from '../model/lembrete-tipo.model';
import { LembreteTipoService } from '../service/lembrete-tipo.service';

@Component({
  selector: 'app-lembrete-tipo-delete',
  templateUrl: './lembrete-tipo-delete.component.html',
  styleUrls: ['./lembrete-tipo-delete.component.css']
})
export class LembreteTipoDeleteComponent implements OnInit {

  lembreteTipo: LembreteTipo = {
    id: 0,
    nome: '',
    intervalo: 0,
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private lembreteTipoService: LembreteTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.lembreteTipoService.readById(id).subscribe(lembreteTipo => {
      this.lembreteTipo = lembreteTipo
    })
  }

  delete(): void {
    this.lembreteTipoService.delete(this.lembreteTipo.id + '').subscribe(() => {
      this.messageService.showMessage("Tipo de lembrete removido com sucesso.")
      this.router.navigate(['cadastros/lembretes-tipos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/lembretes-tipos'])
  }


}
