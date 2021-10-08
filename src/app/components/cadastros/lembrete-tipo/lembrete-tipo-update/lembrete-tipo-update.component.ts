import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { LembreteTipoInput } from '../model/lembrete-tipo-input.model';
import { LembreteTipoService } from '../service/lembrete-tipo.service';

@Component({
  selector: 'app-lembrete-tipo-update',
  templateUrl: './lembrete-tipo-update.component.html',
  styleUrls: ['./lembrete-tipo-update.component.css']
})
export class LembreteTipoUpdateComponent implements OnInit {

  lembreteTipo: LembreteTipoInput = {
    nome: '',
    intervalo: 0
  };

  id = '';

  constructor(private lembreteTipoService: LembreteTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')  as string
    this.lembreteTipoService.readById(this.id).subscribe(lembreteTipo => {
      this.lembreteTipo = lembreteTipo
    })
  }

  update(): void{
    this.lembreteTipoService.update(this.id, this.lembreteTipo).subscribe(() => {
      this.messageService.showMessage("Tipo de lembrete atualizado com sucesso.")
      this.router.navigate(['cadastros/lembretes-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/lembretes-tipos'])
  }

}
