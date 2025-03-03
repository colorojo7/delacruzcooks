import React from 'react'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  const {id} = useParams() 
  return (
    <div>RecipePage for {id}

    </div>
  )
}

export default RecipePage