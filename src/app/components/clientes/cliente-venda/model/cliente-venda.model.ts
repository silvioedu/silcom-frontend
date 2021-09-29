export interface ClienteVenda {
  id: number;
  formaPagamentoTipoNome: string;
  desconto: number;
  agravo: number;
  valorTotal: number;
  emitirNota: boolean;
  observacoes: string
  dataCriacao: number;
  dataAtualizacao: number;
}
