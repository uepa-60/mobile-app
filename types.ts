export type Response = {
  cidade: string
  nome: string
  departamentos?: Departamento[]
  descricao: string
  endereco: string
  telefones: string[]
  site: string
  horario: string
  facebook: string
  instagram: string
  coordenadas: Coordenadas
  servicos?: string[]
}

export type Departamento = {
  nome: string
  servicos: string[]
}

export type Coordenadas = {
  latitude: number
  longitutde: number
}