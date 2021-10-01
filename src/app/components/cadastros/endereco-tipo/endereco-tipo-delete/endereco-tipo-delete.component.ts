import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { EnderecoTipo } from '../model/endereco-tipo.model';
import { EnderecoTipoService } from '../service/endereco-tipo.service';

@Component({
  selector: 'app-endereco-tipo-delete',
  templateUrl: './endereco-tipo-delete.component.html',
  styleUrls: ['./endereco-tipo-delete.component.css']
})
export class EnderecoTipoDeleteComponent implements OnInit {

  enderecoTipo: EnderecoTipo = {
    id: 0,
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
    const id = this.route.snapshot.paramMap.get('id') as string
    this.enderecoTipoService.readById(id).subscribe(enderecoTipo => {
      this.enderecoTipo = enderecoTipo
    })
  }

  delete(): void {
    this.enderecoTipoService.delete(this.enderecoTipo.id + '').subscribe(() => {
      this.messageService.showMessage("Tipo de endereço removido com sucesso.")
      this.router.navigate(['cadastros/enderecos-tipos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/enderecos-tipos'])
  }

}
