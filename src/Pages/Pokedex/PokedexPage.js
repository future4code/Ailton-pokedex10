import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/coordinator";
import Header from "../../Header/Header";
import {CardsBackground} from "../CardsBackgroundColor"
import {
  ButtonHome,
  Container,
  Card,
  RemoveButton,
  HeaderPokedex,
  ContainerMap,
} from "./pokedexStyled";
import CardHomePage from "../../Pages/Home/CardHomePage";
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
  Icon,
  TypeText,
} from "../Home/cardHomeStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import Pokedex from "../../assests/img/PokedexHeader.jpg";

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
`;

const ContainerFirstPokemon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContainerSecondPokemon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContainerBattlePokemons = styled.div`
  display: flex;
  width: 100%;
  
`;

const ImageSecondPokemon = styled.img``;

const ImageUpToBattle = styled.img`
  width: 45px;
  height: 25px;
  position: absolute;
  left: 26%;
  bottom: 39%;
  z-index: 2;
`;

const Background = styled.div`
  background-image: url(${(props) => props.url});
  background-size: 100% 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 50%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
`;

const BackgroundRight = styled.div`
  background-image: url(${(props) => props.url});
  background-size: 100% 100%;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 50%;
  top: 0;
  right: 0;
  position: absolute;
  z-index: -1;
`;

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

  const startBattle = () => {
    const firstPokemonStats = battlePokemon[0].stats
      .map((stats) => {
        return stats.base_stat;
      })
      .reduce((prev, curr) => prev + curr, 0);

    const secondPokemonStats = battlePokemon[1].stats
      .map((stats) => {
        return stats.base_stat;
      })
      .reduce((prev, curr) => prev + curr, 0);

    if (firstPokemonStats > secondPokemonStats) {
      alert(`${battlePokemon[0].name} venceu esta batalha!`);
    } else if (firstPokemonStats < secondPokemonStats) {
      alert(`${battlePokemon[1].name} venceu esta batalha!`);
    } else {
      alert(`Empataram!`);
    }

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
              pokemonsBattleId.length < 2 ? (
                <RemoveButton onClick={() => addPokemonToBattle(pokemon)}>
                  Escolher
                </RemoveButton>
              ) : (
                <RemoveButton
                  onClick={() => removePokemonFromBattle(pokemon.id)}
                >
                  Remover
                </RemoveButton>
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
        <ButtonBattle onClick={() => setBattleOn(!battleOn)}>
          Stop Battle
        </ButtonBattle>
      ) : (
        <ButtonBattle onClick={() => setBattleOn(!battleOn)}>
          Start Battle
        </ButtonBattle>
      )}
      {/* <ButtonHome >
        Todos os Pokemons
      </ButtonHome> */}
      {/* <h2>Pokedex</h2> */}
      {battleOn && (
        <ContainerBattleee>
          {battlePokemon[0] && (
            <ContainerBattle>
              <ContainerBattlePokemons>
                <ContainerFirstPokemon>
                  <p>
                    {battlePokemon[0].name[0].toUpperCase() +
                      battlePokemon[0].name.substring(1)}
                  </p>
                  {/* {renderLeftBackground(`${battlePokemon[0].types[0].type.name}`)} */}
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
                    {/* {renderRightBackground(
                    `${battlePokemon[1].types[0].type.name}`
                  )} */}
                    <ImageSecondPokemon
                      src={secondPokemonBattleGif}
                      alt="pokemon"
                    />
                  </ContainerSecondPokemon>
                )}
              </ContainerBattlePokemons>
              {battlePokemon.length === 2 ? (
                <button onClick={() => startBattle()}>Começar batalha!</button>
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
