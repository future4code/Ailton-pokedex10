import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
// import { TypeNormal, TypeFire, TypeWater, TypeGrass, TypeFlying, TypePoison, TypeElectric, TypeGround, TypeRock, TypePsychic, TypeIce, TypeBug, TypeGhost, TypeSteel, TypeDragon, TypeDark, TypeFairy} from "../styled-components/TypeBackgroundColor"
import { useRequestData } from "../hooks/useRequestData";
import {
  TypePoison,
  TypeGrass,
  Icon,
  TypeText,
  TypeBug,
  TypeDark,
  TypeDragon,
  TypeElectric,
  TypeFairy,
  TypeFighting,
  TypeFire,
  TypeFlying,
  TypeGround,
  TypeGhost,
  TypeIce,
  TypeNormal,
  TypePsychic,
  TypeRock,
  TypeSteel,
  TypeWater,
} from "../Pages/Home/cardHomeStyled";
import Poison from "../assests/img/Poison.png";
import Grass from "../assests/img/Grass.png";
import bug from "../assests/img/bug.png";
import fire from "../assests/img/fire.png";
import flying from "../assests/img/flying.png";
import water from "../assests/img/water.png";
import normal from "../assests/img/normal.png";
import dark from "../assests/img/dark.png";
import dragon from "../assests/img/dragon.png";
import electric from "../assests/img/electric.png";
import fairy from "../assests/img/fairy.png";
import fighting from "../assests/img/fighting.png";
import ghost from "../assests/img/ghost.png";
import ground from "../assests/img/ground.png";
import ice from "../assests/img/ice.png";
import psychic from "../assests/img/psychic.png";
import rock from "../assests/img/rock.png";
import steel from "../assests/img/steel.png";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const infoPokemons = useRequestData();
  
  const [pokemonsInsidePokedex, setPokemonsInsidePokedex] = useState([]);

  const arrayPokemonsId = pokemonsInsidePokedex.map((pokemon) => {
    return pokemon.id;
  });

  const addPokemonToPokedex = (pokemon) => {
    let addingNewPokemon = [...pokemonsInsidePokedex, pokemon];
    setPokemonsInsidePokedex(addingNewPokemon);
  };

  const removePokemonFromPokedex = (id) => {
    const arrayPokemonRemoved = pokemonsInsidePokedex.filter((pokemon) => {
      return id !== pokemon.id;
    });
    setPokemonsInsidePokedex(arrayPokemonRemoved);
  };

//   const typeList = {
//     normal: {
//       element: normal,
//       type: "Normal",
//     },
//   };

//   console.log(typeList["normal"].element);

  const typeBackgroundColor = (type) => {
    switch (type) {
      case "normal":
        return (
          <TypeNormal>
            <Icon src={normal} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeNormal>
        );
      case "fire":
        return (
          <TypeFire>
            <Icon src={fire} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeFire>
        );
      case "water":
        return (
          <TypeWater>
            <Icon src={water} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeWater>
        );
      case "grass":
        return (
          <TypeGrass>
            <Icon src={Grass} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeGrass>
        );
      case "flying":
        return (
          <TypeFlying>
            <Icon src={flying} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeFlying>
        );
      case "poison":
        return (
          <TypePoison>
            <Icon src={Poison} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePoison>
        );
      case "electric":
        return (
          <TypeElectric>
            <Icon src={electric} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeElectric>
        );
      case "ground":
        return (
          <TypeGround>
            <Icon src={ground} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeGround>
        );
      case "rock":
        return (
          <TypeRock>
            <Icon src={rock} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeRock>
        );
      case "psychic":
        return (
          <TypePsychic>
            <Icon src={psychic} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePsychic>
        );
      case "ice":
        return (
          <TypeIce>
            <Icon src={ice} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeIce>
        );
      case "bug":
        return (
          <TypeBug>
            <Icon src={bug} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeBug>
        );
      case "ghost":
        return (
          <TypeGhost>
            <Icon src={ghost} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeGhost>
        );
      case "steel":
        return (
          <TypeSteel>
            <Icon src={steel} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeSteel>
        );
      case "dragon":
        return (
          <TypeDragon>
            <Icon src={dragon} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeDragon>
        );
      case "dark":
        return (
          <TypeDark>
            <Icon src={dark} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeDark>
        );
      case "fairy":
        return (
          <TypeFairy>
            <Icon src={fairy} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypeFairy>
        );
      default:
        return null;
    }
  };

  const values = {
    pokemonsInsidePokedex: pokemonsInsidePokedex,
    infoPokemons: infoPokemons,
    arrayPokemonsId: arrayPokemonsId,
    functionAdd: addPokemonToPokedex,
    functionRemove: removePokemonFromPokedex,
    typeBackgroundColor: typeBackgroundColor,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
