import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { EnderecoTipo } from '../model/endereco-tipo.model';
import { EnderecoTipoService } from '../service/endereco-tipo.service';

@Component({
  selector: 'app-endereco-tipo-update',
  templateUrl: './endereco-tipo-update.component.html',
  styleUrls: ['./endereco-tipo-update.component.css']
})
export class EnderecoTipoUpdateComponent implements OnInit {

  enderecoTipo: EnderecoTipo = {
    nome: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private enderecoTipoService: EnderecoTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')  as string
    this.enderecoTipoService.readById(id).subscribe(enderecoTipo => {
      this.enderecoTipo = enderecoTipo
    })
  }

  update(): void{
    this.enderecoTipoService.update(this.enderecoTipo).subscribe(() => {
      this.messageService.showMessage("Tipo de endereço atualizado com sucesso.")
      this.router.navigate(['cadastros/enderecos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/enderecos-tipos'])
  }

}
