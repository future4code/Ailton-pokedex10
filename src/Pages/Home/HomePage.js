import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetails, goToPokedex } from '../../Router/coordinator'

const HomePage = () => {

        const navigate = useNavigate()
    
        
  return (
    <div>HomePage
    <button onClick={() => goToDetails(navigate)}>DETAILS</button>
    <button onClick={() => goToPokedex(navigate)}>Pokedex</button>

    </div>
  )
  }

export default HomePage