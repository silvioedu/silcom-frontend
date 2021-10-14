export interface VendaReport {
  id: number;
  dataCriacao: number;
  formaPagamento: string;
  emitirNota: boolean;
  status: string;
  clienteRazaoSocial: string;
  documento: string;
  endereco: string;
  email: string;
  telefone: string;
  observacoes: string;
  itens: VendaItemReport[];
  valorTotal: number;
}

export interface VendaItemReport {
  codigo: string;
  descricao: string;
  tamanho: number;
  quantidade: number;
  valorUnitario: number;
}
