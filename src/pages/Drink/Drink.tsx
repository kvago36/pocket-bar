import { useParams } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'

import { useDrink } from 'hooks/useApi'


function Drink() {
  const { id } = useParams()
  const { drink, isLoading, isError } = useDrink(id!)

  if (isLoading) {
    return <Skeleton animation="wave" />
  }

  return (
    <div>
      <h2>{drink!.name}</h2>
      <h4>{id}</h4>
    </div>
  )
}

export default Drink
