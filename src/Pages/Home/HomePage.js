import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetails, goToPokedex } from '../../Routes/coordinator'
import { Container } from './homePageStyled'
import CardHomePage from './CardHomePage'


const HomePage = () => {

        const navigate = useNavigate()
    
        
  return (

    <Container>
      <h1>Todos os Pokémons</h1>
      {/* <CardHomePage/> */}
    <button onClick={() => goToDetails(navigate)}>DETAILS</button>
    <button onClick={() => goToPokedex(navigate)}>Pokedex</button>

    </Container>
  )
  }

export default HomePage