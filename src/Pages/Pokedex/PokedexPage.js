import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/coordinator";
import Header from "../../Header/Header";
import { CardsBackground } from "../CardsBackgroundColor";
// import fire from "../../assests/img/battleimg/fire.jpg";
// import bug from "../../assests/img/battleimg/bug.jpg";
// import dark from "../../assests/img/battleimg/dark.jpg";
// import dragon from "../../assests/img/battleimg/dragon.jpg";
// import electric from "../../assests/img/battleimg/electric.jpg";
// import fairy from "../../assests/img/battleimg/fairy.jpg";
// import fighting from "../../assests/img/battleimg/fighting.jpg";
// import flying from "../../assests/img/battleimg/flying.jpg";
// import ghost from "../../assests/img/battleimg/ghost.jpg";
// import grass from "../../assests/img/battleimg/grass.jpg";
// import ground from "../../assests/img/battleimg/ground.jpg";
// import ice from "../../assests/img/battleimg/ice.jpg";
// import normal from "../../assests/img/battleimg/normal.jpg";
// import poison from "../../assests/img/battleimg/poison.jpg";
// import rock from "../../assests/img/battleimg/rock.png";
// import steel from "../../assests/img/battleimg/steel.jpg";
// import water from "../../assests/img/battleimg/water.jpg";
// import psychicbackground from "../../assests/img/battleimg/psychicbackground.png";
import {
  ButtonHome,
  Container,
  Card,
  RemoveButton,
  HeaderPokedex,
  ContainerMap,
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
import { startBattle, renderLeftBackground, renderRightBackground  } from "./battleFight";

const ButtonBattle = styled.button`
  position: absolute;
  top: 0;
  right: 10%;
  height: 50px;
  width: 90px;
  margin-top: 20px;
`;

const ContainerBattle = styled.div`
  width: 500px;
  height: 200px;
  box-shadow: 1px 1px 5px black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px 0px;
  position: relative;
  background-color: white;

  p {
    font-size: 32px;
    margin: 0;
  }

  img {
    width: 70px;
    height: 70px;
  }
`;

const ImageFirstPokemon = styled.img`
  -webkit-transform: rotateY(180deg);
  z-index: 2;
`;

const ContainerFirstPokemon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;

  p {
    z-index: 2;
  }
`;

const ContainerSecondPokemon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;

  p {
    z-index: 2;
  }
`;

const ContainerBattlePokemons = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
`;

const ImageSecondPokemon = styled.img`
  z-index: 2;
`;

const ImageUpToBattle = styled.img`
  width: 45px;
  height: 25px;
  position: absolute;
  left: 26%;
  bottom: 39%;
  z-index: 2;
`;

// const Background = styled.div`
//   background-image: url(${(props) => props.url});
//   background-size: 100% 100%;
//   height: 100%;
//   border-top-left-radius: 8px;
//   border-bottom-left-radius: 8px;
//   width: 50%;
//   top: 0;
//   left: 0;
//   position: absolute;
//   z-index: 0;
// `;

// const BackgroundRight = styled.div`
//   background-image: url(${(props) => props.url});
//   background-size: 100% 100%;
//   height: 100%;
//   border-top-right-radius: 8px;
//   border-bottom-right-radius: 8px;
//   width: 50%;
//   top: 0;
//   right: 0;
//   position: absolute;
//   z-index: 0;
// `;

const ImageBackground = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  transform: rotate(30deg);
  opacity: 0.17;
  z-index: 1;
  top: 5px;
`;

const ContainerBattleee = styled.div`
  margin: -150px 0 100px 31.5%;

  button {
    z-index: 2;
  }
`;

const ContainerPickYourPokemons = styled.div`
  position: absolute;
  left: 42%;
  top: 33%;
  background-color: #e3767b;
  border-radius: 6px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsBattle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 116px;
  height: 28px;
  z-index: 2;
  color: white;
  background: black;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  line-height: 24px;
  font-family: Verdana;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  :hover {
    background: #d5011d;
    color: #fff;
    font-weight: bold;
    font-size: 17px;

    box-shadow: 0 0 40px 40px #d5011d inset;
  }
`;

const ButtonsBattleHide = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 116px;
  height: 28px;
  z-index: 2;
  display: hidden;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  line-height: 24px;
  font-family: Verdana;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;

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
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
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
          <p>Escolha seus pokemons!</p>
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
                  Começar!
                </RemoveButton>
              ) : (
                <button disabled>Escolha outro pokemon!</button>
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
