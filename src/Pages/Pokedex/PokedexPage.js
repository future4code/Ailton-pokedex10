import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/coordinator'
import Header from "../../Header/Header";
import { ButtonHome, Container, Card} from './pokedexStyled';
import CardHomePage from '../../Pages/Home/CardHomePage';

const PokedexPage = () => {

    const navigate = useNavigate()

  return (
    <Container>
        <Header/>
    <ButtonHome onClick={() => goToHome(navigate)}>Todos os Pokemons</ButtonHome>
      <h2>PokedexPage</h2>
      <Card>
        <CardHomePage/>
      </Card>
 
    </Container>
  )
}

export default PokedexPage