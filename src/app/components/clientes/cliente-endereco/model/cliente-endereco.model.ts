export interface ClienteEndereco {
  id: number;
  tipoEnderecoNome: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  observacoes: string;
  dataCriacao: number;
  dataAtualizacao: number;
}
