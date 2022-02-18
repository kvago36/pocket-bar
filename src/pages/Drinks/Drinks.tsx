import DrinkCard from 'components/DrinkCard/DrinkCard'

import { useDrinks } from 'hooks/useApi'

const mocs = [
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

function Drinks() {
  const { drinks, isLoading, isError } = useDrinks()

  return (
    <>
      {mocs.map((drink: any) => (
        <DrinkCard key={drink.id} {...drink} />
      ))}
    </>
  )
}

export default Drinks
