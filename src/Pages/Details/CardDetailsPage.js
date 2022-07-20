import React, { useContext, useEffect, useState } from "react";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  Info,
  Types,
  Container,
  Photo1,
  Photo2,
  InfoPoke,
  Moves,
} from "./CardDetailsStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardHomePage = () => {
  const pathParams = useParams();

  const values = useContext(GlobalContext);

  const [pokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pathParams.name}`)
      .then((res) => {
        setPokemonDetail(res.data);
      });
  };

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pathParams.id}.png`;

  return (
    <Container>
      {pokemonDetail.name && pokemonDetail.types ? (
        <PrincipalCard>
          <Photo1>
            <h3>Foto1</h3>
          </Photo1>
          <Photo2>
            <h3>Foto2</h3>
          </Photo2>
          <InfoPoke>
            <h3>Info</h3>
          </InfoPoke>
          <Moves>
            <h3>Moves</h3>:
          </Moves>
          <Info>
            <h3>#0{pokemonDetail.id}</h3>
            <h1>{pokemonDetail.name}</h1>
            <Types>
              {pokemonDetail.types.map((types) => {
                return values.typeBackgroundColor(types.type.name);
              })}
            </Types>
          </Info>
          <ImagemPokemon>
            <img src={url} alt="pokemon"/>
          </ImagemPokemon>
          <ImagemBackground>
            <img src={Pokebola} alt="pokebola"/>
          </ImagemBackground>
        </PrincipalCard>
      ) : (
        <p> loading...</p>
      )}
    </Container>
  );
};

export default CardHomePage;
