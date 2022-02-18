export enum Units {
  ml,
  oz,
  g
}

export type InstrumentsType = {
  name: string
  count: number
}

export type IngredientsType = {
  name: string
  value: number
  units: Units
}

export type DrinksType = {
  name: string
  description?: string
  ingredients: IngredientsType[]
  instruments: InstrumentsType[]
}

export type Error = {
  code: string,
  message?: string
}


export type UsersType = {
  name: string,
  lastName: string,
  telephone: string,
  birthday: Date,
  email: string
}