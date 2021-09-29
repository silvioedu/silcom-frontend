export interface ClienteVendaInput {
  formaPagamentoTipoId: number;
  desconto: number;
  agravo: number;
  valorTotal: number;
  emitirNota: boolean;
  observacoes: string
}
