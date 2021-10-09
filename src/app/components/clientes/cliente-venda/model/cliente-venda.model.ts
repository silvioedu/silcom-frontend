export interface ClienteVenda {
  id: number;
  status: string;
  formaPagamentoTipoNome: string;
  desconto: number;
  agravo: number;
  valorTotal: number;
  emitirNota: boolean;
  observacoes: string
  dataCriacao: number;
  dataAtualizacao: number;
}
