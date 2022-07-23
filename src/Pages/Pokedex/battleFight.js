import styled from "styled-components";
import fire from "../../assests/img/battleimg/fire.jpg";
import bug from "../../assests/img/battleimg/bug.jpg";
import dark from "../../assests/img/battleimg/dark.jpg";
import dragon from "../../assests/img/battleimg/dragon.jpg";
import electric from "../../assests/img/battleimg/electric.jpg";
import fairy from "../../assests/img/battleimg/fairy.jpg";
import fighting from "../../assests/img/battleimg/fighting.jpg";
import flying from "../../assests/img/battleimg/flying.jpg";
import ghost from "../../assests/img/battleimg/ghost.jpg";
import grass from "../../assests/img/battleimg/grass.jpg";
import ground from "../../assests/img/battleimg/ground.jpg";
import ice from "../../assests/img/battleimg/ice.jpg";
import normal from "../../assests/img/battleimg/normal.jpg";
import poison from "../../assests/img/battleimg/poison.jpg";
import rock from "../../assests/img/battleimg/rock.png";
import steel from "../../assests/img/battleimg/steel.jpg";
import water from "../../assests/img/battleimg/water.jpg";
import psychicbackground from "../../assests/img/battleimg/psychicbackground.png";

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
  z-index: 0;
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
  z-index: 0;
`;

export const startBattle = (pokemon1, pokemon2) => {
    const firstPokemonStats = pokemon1.stats
      .map((stats) => {
        return stats.base_stat;
      })
      .reduce((prev, curr) => prev + curr, 0);

    const secondPokemonStats = pokemon2.stats
      .map((stats) => {
        return stats.base_stat;
      })
      .reduce((prev, curr) => prev + curr, 0);
      
    if (
        pokemon1.types[0].type.name === "water" &&
        pokemon2.types[0].type.name === "fire"
    ) {
      if (firstPokemonStats*1.30 > secondPokemonStats) {
        alert(`${pokemon1.name} venceu esta batalha com ${firstPokemonStats*1.30} pontos (+30%) contra ${secondPokemonStats} pontos!`);
      } else if (firstPokemonStats < secondPokemonStats) {
        alert(`${pokemon2.name} venceu esta batalha!`);
      } else {
        alert(`Empataram!`);
      }
    }
  };

  export const renderLeftBackground = (type) => {
    switch (type) {
      case "normal":
        return <Background url={normal}></Background>;
      case "fire":
        return <Background url={fire}></Background>;
      case "water":
        return <Background url={water}></Background>;
      case "grass":
        return <Background url={grass}></Background>;
      case "flying":
        return <Background url={flying}></Background>;
      case "poison":
        return <Background url={poison}></Background>;
      case "electric":
        return <Background url={electric}></Background>;
      case "ground":
        return <Background url={ground}></Background>;
      case "rock":
        return <Background url={rock}></Background>;
      case "psychic":
        return <Background url={psychicbackground}></Background>;
      case "ice":
        return <Background url={ice}></Background>;
      case "bug":
        return <Background url={bug}></Background>;
      case "ghost":
        return <Background url={ghost}></Background>;
      case "steel":
        return <Background url={steel}></Background>;
      case "dragon":
        return <Background url={dragon}></Background>;
      case "dark":
        return <Background url={dark}></Background>;
      case "fairy":
        return <Background url={fairy}></Background>;
      case "fighting":
        return <Background url={fighting}></Background>;
      default:
        return null;
    }
  };

  export const renderRightBackground = (type) => {
    switch (type) {
      case "normal":
        return <BackgroundRight url={normal}></BackgroundRight>;
      case "fire":
        return <BackgroundRight url={fire}></BackgroundRight>;
      case "water":
        return <BackgroundRight url={water}></BackgroundRight>;
      case "grass":
        return <BackgroundRight url={grass}></BackgroundRight>;
      case "flying":
        return <BackgroundRight url={flying}></BackgroundRight>;
      case "poison":
        return <BackgroundRight url={poison}></BackgroundRight>;
      case "electric":
        return <BackgroundRight url={electric}></BackgroundRight>;
      case "ground":
        return <BackgroundRight url={ground}></BackgroundRight>;
      case "rock":
        return <BackgroundRight url={rock}></BackgroundRight>;
      case "psychic":
        return <BackgroundRight url={psychicbackground}></BackgroundRight>;
      case "ice":
        return <BackgroundRight url={ice}></BackgroundRight>;
      case "bug":
        return <BackgroundRight url={bug}></BackgroundRight>;
      case "ghost":
        return <BackgroundRight url={ghost}></BackgroundRight>;
      case "steel":
        return <BackgroundRight url={steel}></BackgroundRight>;
      case "dragon":
        return <BackgroundRight url={dragon}></BackgroundRight>;
      case "dark":
        return <BackgroundRight url={dark}></BackgroundRight>;
      case "fairy":
        return <BackgroundRight url={fairy}></BackgroundRight>;
      case "fighting":
        return <BackgroundRight url={fighting}></BackgroundRight>;
      default:
        return null;
    }
  };