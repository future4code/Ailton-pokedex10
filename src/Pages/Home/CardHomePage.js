import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  DetailButton,
  CaptureButton,
  Info,
  Types,
  Buttons,
  Icon,
  TypeText,
  Capturado,
  ButtonCapture,
  VerMais,
  ContainerMap,
  ContainerBusca,
  ButtonBackSearch
} from "./cardHomeStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import { goToDetails } from "../../Routes/coordinator";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";
import { CardsBackground } from "../CardsBackgroundColor";
import { useRequestData } from "../../hooks/useRequestData";
import axios from "axios";

const CardHomePage = () => {
  const navigate = useNavigate();
  const values = useContext(GlobalContext);

  const [visible, setVisible] = useState(20);
  const [inputSearch, setInputSearch] = useState("");
  const [pokemonFound, setPokemonFound] = useState();

  const infoPokemons = useRequestData(visible);

  const searchPokemon = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => {
        setPokemonFound([res.data]);
      })
      .catch((err) => {
        alert("Nome de pokemon não encontrado.");
      });
    setInputSearch("");
  };

  const renderPokemons = infoPokemons?.map((pokemon) => {
    const urlPhoto1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
    return (
      <PrincipalCard key={pokemon.id}>
        <CardsBackground color={pokemon.types[0].type.name}></CardsBackground>
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
            {values.arrayPokemonsId.includes(pokemon.id) ? (
              <Capturado disabled>Capturado</Capturado>
            ) : (
              <ButtonCapture button onClick={() => values.functionAdd(pokemon)}>
                Capturar
              </ButtonCapture>
            )}
          </CaptureButton>
        </Buttons>
        <ImagemPokemon>
          <img src={urlPhoto1} alt="pokemon" />
        </ImagemPokemon>
        <ImagemBackground>
          <img src={Pokebola} alt="pokemon" />
        </ImagemBackground>
      </PrincipalCard>
    );
  });

  const renderSearchPokemon = pokemonFound?.map((pokemon) => {
    const urlPhoto1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
    return (
      <PrincipalCard key={pokemon.id}>
        <CardsBackground color={pokemon.types[0].type.name}></CardsBackground>
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
            {values.arrayPokemonsId.includes(pokemon.id) ? (
              <Capturado disabled>Capturado</Capturado>
            ) : (
              <ButtonCapture button onClick={() => values.functionAdd(pokemon)}>
                Capturar
              </ButtonCapture>
            )}
          </CaptureButton>
        </Buttons>
        <ImagemPokemon>
          <img src={urlPhoto1} alt="pokemon" />
        </ImagemPokemon>
        <ImagemBackground>
          <img src={Pokebola} alt="pokemon" />
        </ImagemBackground>
      </PrincipalCard>
    );
  });

  return (
    <div>
      {pokemonFound ? (
        <ButtonBackSearch onClick={() => setPokemonFound(undefined)}>
          Voltar
        </ButtonBackSearch>
      ) : (
        <ContainerBusca>
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Buscar Pokemon"
          />  
          <button onClick={() => searchPokemon(inputSearch)}>
            buscar
          </button>
        </ContainerBusca>
      )}
      {pokemonFound ? (
        <ContainerMap>{renderSearchPokemon}</ContainerMap>
      ) : (
        <ContainerMap>{renderPokemons}</ContainerMap>
      )}
      <VerMais onClick={() => setVisible(visible + 20)}>Mais Pokemons</VerMais>
    </div>
  );
};

export default CardHomePage;
