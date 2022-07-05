export type Root = {
  social: BaseObject[]
  saude: BaseObject[]
}

type BaseObject = {
  cidade: string
  nome: string
  descricao: string
  endereco: string
  site?: string
  facebook?: string
  instagram?: string
  telefones?: string[]
  departamentos?: Departamento[]
  coordenadas: Coordenadas
  servicos?: string[]
  horario?: string
}

type Departamento = {
  nome: string
  servicos: string[]
}

type Coordenadas = {
  latitude: number
  longitude: number
}
