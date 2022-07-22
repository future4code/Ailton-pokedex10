import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/coordinator";
import Header from "../../Header/Header";
import { ButtonHome, Container, Card ,RemoveButton, HeaderPokedex, ContainerMap} from "./pokedexStyled";
import CardHomePage from "../../Pages/Home/CardHomePage";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  TypeGrass,
  TypePoison,
  DetailButton,
  CaptureButton,
  Info,
  Types,
  Buttons,
  Icon,
  TypeText,
  } from "../Home/cardHomeStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import Pokedex from "../../assests/img/PokedexHeader.jpg";



const PokedexPage = () => {
  const navigate = useNavigate();
  const values = useContext(GlobalContext);

  const renderPokemons = values.pokemonsInsidePokedex?.map((pokemon) => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    return (
      <PrincipalCard key={pokemon.id}>
        <Info>
          <h3>#0{pokemon.id}</h3>
          <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
          <Types>
            {pokemon.types.map((types) => {
              return values.typeBackgroundColor(types.type.name);
            })}
          </Types>
        </Info>
        <Buttons>
          <DetailButton
            onClick={() => goToDetails(navigate, pokemon.name, pokemon.id)}
          >
            Detalhes
          </DetailButton>
          <CaptureButton>
            {" "}
            <RemoveButton onClick={() => values.functionRemove(pokemon.id)}>
              Remover
            </RemoveButton>
          </CaptureButton>
        </Buttons>
        <ImagemPokemon>
          <img src={url} alt="pokemon" />
        </ImagemPokemon>
        <ImagemBackground>
          <img src={Pokebola} alt="pokemon" />
        </ImagemBackground>
      </PrincipalCard>
    );
  });

  return (
    <Container>
      <Header />
      <HeaderPokedex src={Pokedex}/>
      {/* <ButtonHome >
        Todos os Pokemons
      </ButtonHome> */}
      {/* <h2>Pokedex</h2> */}
      <ContainerMap>
        {renderPokemons}
      </ContainerMap>
    </Container>
  );
};

export default PokedexPage;
