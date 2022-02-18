import { Units } from 'types'

export const drinks = [
  {
    id: 1,
    name: 'Куба-либре',
  },
  {
    id: 2,
    name: 'Космополитан',
  },
  {
    id: 3,
    name: 'Дайкири',
  },
  {
    id: 4,
    name: 'Отвертка',
  },
  {
    id: 5,
    name: 'Негрони',
  },
]

export const drink = {
  name: 'Cuba Libre',
  description: 'Long drink with Rom and Cola',
  instruments: [
    {
      name: 'Хайбол',
      count: 1,
    },
    {
      name: 'Пресс для цитрусовых',
      count: 1,
    },
    {
      name: 'Джиггер',
      count: 1,
    },
    {
      name: 'Коктейльная ложка',
      count: 1,
    },
    {
      name: 'Трубочки',
      count: 2,
    },
  ],
  ingredients: [
    {
      name: 'Cola',
      value: 140,
      units: Units.ml,
    },
    {
      name: 'White rom',
      value: 50,
      units: Units.ml,
    },
    {
      name: 'Lime juice',
      value: 10,
      units: Units.ml,
    },
    {
      name: 'Cubed ice',
      value: 180,
      units: Units.g,
    },
    {
      name: 'Lime',
      value: 20,
      units: Units.g,
    },
  ],
}