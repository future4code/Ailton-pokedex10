import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Capturado,
  ButtonCapture,
} from "./cardHomeStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import { goToDetails } from "../../Routes/coordinator";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";
import { CardsBackground } from "../CardsBackgroundColor";
// import Poison from "../assests/img/Poison.png";
// import Grass from "../assests/img/Grass.png";
// import bug from "../assests/img/bug.png";
// import fire from "../assests/img/fire.png";
// import flying from "../assests/img/flying.png";
// import water from "../assests/img/water.png";
import normal from "../../assests/img/normal.png";
import { useRequestData } from "../../hooks/useRequestData";
// import dark from "../assests/img/dark.png";
// import dragon from "../assests/img/dragon.png";
// import electric from "../assests/img/electric.png";
// import fairy from "../assests/img/fairy.png";
// import fighting from "../assests/img/fighting.png";
// import ghost from "../assests/img/ghost.png";
// import ground from "../assests/img/ground.png";
// import ice from "../assests/img/ice.png";
// import psychic from "../assests/img/psychic.png";
// import rock from "../assests/img/rock.png";
// import steel from "../assests/img/steel.png";

const ContainerMap = styled.div`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  `;

const CardHomePage = () => {
  // const typeList = {
    //   normal: {
      //       element: normal,
      //       type: 'Normal',
      //       color: '#f2f2f2'
      //   }
      // }
      
      const navigate = useNavigate();
      const values = useContext(GlobalContext);
      
       const [visible, setVisible] = useState(20);

  const infoPokemons = useRequestData(visible);

  console.log(visible)

  const renderPokemons = infoPokemons?.map((pokemon) => {
    // const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
     const urlPhoto1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`
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
    <ContainerMap>
      {renderPokemons}
      <button onClick={() => setVisible(visible + 20)}>Ver mais</button>
    </ContainerMap>
  );
};

export default CardHomePage;
