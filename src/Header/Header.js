import React from "react";
import {HeaderContainer} from "./headerStyled"
import {ImagemContainer} from "./headerStyled"
import {ButtonContainer} from "./headerStyled"
import LogoPokemon from "../assests/img/LogoPokemon.png"
import { goToPokedex } from "../Routes/coordinator";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ImagemContainer src={LogoPokemon}/>
      <ButtonContainer onClick={() => goToPokedex(navigate)}>Pokedex</ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
