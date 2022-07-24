import React from "react";
import {HeaderContainer} from "./headerStyled"
import {ImagemContainer} from "./headerStyled"
import {ButtonContainer} from "./headerStyled"
import LogoPokemon from "../assests/img/LogoPokemon.png"
import { goToPokedex } from "../Routes/coordinator";
import { goToHome } from "../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import Pokedex from "../assests/img/Pokedex.png"

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ImagemContainer onClick={() => goToHome(navigate)} src={LogoPokemon}/>
      <ButtonContainer onClick={() => goToPokedex(navigate)} src={Pokedex}></ButtonContainer>
      {/* <ContainerBusca>
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Buscar pokemon"
          />  
          <button onClick={() => searchPokemon(inputSearch)}>
            buscar
          </button>
        </ContainerBusca> */}
    </HeaderContainer>
  );
};

export default Header;
