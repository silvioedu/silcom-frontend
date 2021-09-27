export interface ClienteDocumento {
  id: number;
  tipoDocumentoNome: string;
  documento: string;
  isento: boolean;
  observacoes: string
  dataCriacao: number;
  dataAtualizacao: number;
}
