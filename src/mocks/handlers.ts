// src/mocks/handlers.js
import { rest } from 'msw'

import { DrinksType, Error } from 'types'

import { drinks, drink } from './drinks'

type LoginBody = {
  username: string
}

type LoginResponse = {
  id: string
  username: string
  firstName: string
  lastName: string
}

type DrinksResponse = {
  drinks: DrinksType[],
  error: Error
}

export const handlers = [
  rest.get<DrinksResponse>('/api/drinks/:drinkId', (req, res, ctx) => res(
    ctx.json({
      drink,
      error: null
    })
  )),
  rest.get<DrinksResponse>('/api/drinks', (req, res, ctx) => res(
    ctx.json({
      drinks,
      error: null
    })
  )),
  rest.post<LoginBody, LoginResponse>('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
]
