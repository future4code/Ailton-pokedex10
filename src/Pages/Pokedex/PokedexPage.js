import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/coordinator";
import Header from "../../Header/Header";
import { CardsBackground } from "../CardsBackgroundColor";
import {
  ButtonHome,
  Container,
  Card,
  RemoveButton,
  HeaderPokedex,
  ContainerMap,
  ButtonBattle,
  ContainerBattle,
  ImageFirstPokemon,
  ContainerFirstPokemon,
  ContainerSecondPokemon,
  ContainerBattlePokemons,
  ImageSecondPokemon,
  ImageUpToBattle,
  ImageBackground,
  ContainerBattleee,
  ContainerPickYourPokemons,
  ButtonsBattle,
  ButtonsBattleHide,
  OtherPokemon,
} from "./pokedexStyled";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  DetailButton,
  CaptureButton,
  Info,
  Types,
  Buttons,
} from "../Home/cardHomeStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import Pokedex from "../../assests/img/PokedexHeader.jpg";
import {
  startBattle,
  renderLeftBackground,
  renderRightBackground,
} from "./battleFight";

const PokedexPage = () => {
  const navigate = useNavigate();
  const values = useContext(GlobalContext);

  const [battlePokemon, setBattlePokemon] = useState([]);
  const [battleOn, setBattleOn] = useState(false);

  const addPokemonToBattle = (pokemon) => {
    setBattlePokemon([...battlePokemon, pokemon]);
  };

  const removePokemonFromBattle = (id) => {
    const arrayPokemonRemoved = battlePokemon.filter((pokemon) => {
      return id !== pokemon.id;
    });
    setBattlePokemon(arrayPokemonRemoved);
  };

  const pokemonsBattleId = battlePokemon.map((pokemon) => {
    return pokemon.id;
  });

  const startBattlee = () => {
    startBattle(battlePokemon[0], battlePokemon[1]);
    setTimeout(() => {
      setBattlePokemon([]);
    }, "500");
  };

  let firstPokemonBattleGif = "";
  let secondPokemonBattleGif = "";

  if (battlePokemon.length === 1) {
    firstPokemonBattleGif = `https://pokemon-react-635a4.web.app/images/animated/${battlePokemon[0].id}.gif`;
  } else if (battlePokemon.length >= 2) {
    firstPokemonBattleGif = `https://pokemon-react-635a4.web.app/images/animated/${battlePokemon[0].id}.gif`;
    secondPokemonBattleGif = `https://pokemon-react-635a4.web.app/images/animated/${battlePokemon[1].id}.gif`;
  }

  const buttonStartBattle = () => {
    setBattleOn(!battleOn);
    setBattlePokemon([]);
  };

  const renderPokemons = values.pokemonsInsidePokedex?.map((pokemon) => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
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
          {battleOn ? (
            <CaptureButton>
              {!pokemonsBattleId.includes(pokemon.id) &&
                pokemonsBattleId.length < 2 && (
                  <ButtonsBattle onClick={() => addPokemonToBattle(pokemon)}>
                    Escolher
                  </ButtonsBattle>
                )}
              {pokemonsBattleId.includes(pokemon.id) && (
                <ButtonsBattle
                  onClick={() => removePokemonFromBattle(pokemon.id)}
                >
                  Remover
                </ButtonsBattle>
              )}
              {!pokemonsBattleId.includes(pokemon.id) &&
                pokemonsBattleId.length === 2 && (
                  <ButtonsBattleHide
                    disabled
                    onClick={() => removePokemonFromBattle(pokemon.id)}
                  >
                    Remover
                  </ButtonsBattleHide>
                )}
            </CaptureButton>
          ) : (
            <CaptureButton>
              {" "}
              <RemoveButton onClick={() => values.functionRemove(pokemon.id)}>
                Remover
              </RemoveButton>
            </CaptureButton>
          )}
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
      <HeaderPokedex src={Pokedex} />
      {battleOn ? (
        <ButtonBattle onClick={() => buttonStartBattle()}>
          Stop Battle
        </ButtonBattle>
      ) : (
        <ButtonBattle onClick={() => buttonStartBattle()}>
          Start Battle
        </ButtonBattle>
      )}
      {battleOn && !battlePokemon[0] && (
        <ContainerPickYourPokemons>
          <p>Escolha seus pokemons</p>
        </ContainerPickYourPokemons>
      )}
      {battleOn && (
        <ContainerBattleee>
          {battlePokemon[0] && (
            <ContainerBattle>
              <ContainerBattlePokemons>
                <ContainerFirstPokemon>
                  <p>
                    {battlePokemon[0]?.name[0].toUpperCase() +
                      battlePokemon[0]?.name.substring(1)}
                  </p>
                  {renderLeftBackground(
                    `${battlePokemon[0].types[0].type.name}`
                  )}
                  <ImageFirstPokemon
                    src={firstPokemonBattleGif}
                    alt="pokemon"
                  />
                </ContainerFirstPokemon>
                {battlePokemon[1] && (
                  <ContainerSecondPokemon>
                    <p>
                      {battlePokemon[1].name[0].toUpperCase() +
                        battlePokemon[1].name.substring(1)}
                    </p>
                    {renderRightBackground(
                      `${battlePokemon[1].types[0].type.name}`
                    )}
                    <ImageSecondPokemon
                      src={secondPokemonBattleGif}
                      alt="pokemon"
                    />
                  </ContainerSecondPokemon>
                )}
              </ContainerBattlePokemons>
              {battlePokemon.length === 2 ? (
                <RemoveButton onClick={() => startBattlee()}>
                  Começar
                </RemoveButton>
              ) : (
                <OtherPokemon disabled>Escolha outro pokemon</OtherPokemon>
              )}
            </ContainerBattle>
          )}
        </ContainerBattleee>
      )}
      <ContainerMap>{renderPokemons}</ContainerMap>
    </Container>
  );
};

export default PokedexPage;
