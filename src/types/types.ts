type Department = {
  name: string
  services: string[]
}

type Coordinates = {
  latitude: number
  longitude: number
}

export type WithDepartments = {
  city: string
  name: string
  description: string
  address: string
  site?: string
  facebook?: string
  instagram?: string
  telephones?: string[]
  departments?: Department[]
  coordinates: Coordinates
  services?: string[]
  time?: string
}

export type ServiceDetails = Omit<WithDepartments, 'departments'>

export type Root = {
  social: WithDepartments[]
  health: WithDepartments[]
}
