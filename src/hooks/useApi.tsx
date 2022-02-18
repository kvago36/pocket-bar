import useSWR from 'swr'

import { get } from 'helpers/fetcher'

import { Error, DrinksType, UsersType } from 'types' 

export function useUser (id: string) {
  const { data, error } = useSWR<UsersType, Error>(`/api/user/${id}`, get)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useDrinks () {
  const { data, error } = useSWR<DrinksType[], Error>('/api/drinks', get)

  return {
    drinks: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function useDrink (id: string) {
  const { data, error } = useSWR<DrinksType, Error>(`/api/drinks/${id}`, get)

  return {
    drink: data,
    isLoading: !error && !data,
    isError: error
  }
}