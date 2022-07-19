import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../Routes/coordinator'

const DetailsPage = () =>{

    const navigate = useNavigate()

  return (
    <div>DetailsPage
    <button onClick={() => goToHome(navigate)}>HOME</button>
    <button onClick={() => goToPokedex(navigate)}>Pokedex</button>

    </div>
  )
}

export default DetailsPage