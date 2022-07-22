import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
// import { TypeNormal, TypeFire, TypeWater, TypeGrass, TypeFlying, TypePoison, TypeElectric, TypeGround, TypeRock, TypePsychic, TypeIce, TypeBug, TypeGhost, TypeSteel, TypeDragon, TypeDark, TypeFairy} from "../styled-components/TypeBackgroundColor"
import { useRequestData } from "../hooks/useRequestData";
import { Icon, TypeText } from "../Pages/Home/cardHomeStyled";
import {TypePokemon} from "../Pages/TypesBackgroundColor"
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

  const typeBackgroundColor = (type) => {
    switch (type) {
      case "normal":
        return (
          <TypePokemon type="normal">
            <Icon src={normal} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "fire":
        return (
          <TypePokemon type="fire">
            <Icon src={fire} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "water":
        return (
          <TypePokemon type="water">
            <Icon src={water} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "grass":
        return (
          <TypePokemon type="grass">
            <Icon src={Grass} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "flying":
        return (
          <TypePokemon type="flying">
            <Icon src={flying} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "poison":
        return (
          <TypePokemon type="poison">
            <Icon src={Poison} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "electric":
        return (
          <TypePokemon type="electric">
            <Icon src={electric} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "ground":
        return (
          <TypePokemon type="ground">
            <Icon src={ground} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "rock":
        return (
          <TypePokemon type="rock">
            <Icon src={rock} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "psychic":
        return (
          <TypePokemon type="psychic">
            <Icon src={psychic} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "ice":
        return (
          <TypePokemon type="ice">
            <Icon src={ice} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "bug":
        return (
          <TypePokemon type="bug">
            <Icon src={bug} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "ghost":
        return (
          <TypePokemon type="ghost">
            <Icon src={ghost} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "steel":
        return (
          <TypePokemon type="steel">
            <Icon src={steel} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "dragon":
        return (
          <TypePokemon type="dragon">
            <Icon src={dragon} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "dark":
        return (
          <TypePokemon type="dark">
            <Icon src={dark} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
        );
      case "fairy":
        return (
          <TypePokemon type="fairy">
            <Icon src={fairy} />
            <TypeText>{type[0].toUpperCase() + type.substring(1)}</TypeText>
          </TypePokemon>
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
