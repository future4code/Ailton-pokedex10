import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToDetails } from '../../Router/coordinator'

const PokedexPage = () => {

    const navigate = useNavigate()

  return (
    <div>PokedexPage
    <button onClick={() => goToHome(navigate)}>HOME</button>
    <button onClick={() => goToDetails(navigate)}>DETAILS</button>

    </div>
  )
}

export default PokedexPage