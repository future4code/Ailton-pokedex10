import styled from "styled-components";

export const TypePokemon = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.type) {
      case "grass":
        return "#70b873";
      case "steel":
        return "#bbbbbb";
      case "fire":
        return "#f44900";
      case "electric":
        return "#f4d23b";
      case "water":
        return "#33a4f5";
      case "ice":
        return "#74cec0";
      case "ground":
        return "#d97745";
      case "rock":
        return "#c7b78b";
      case "fairy":
        return "#ec8fe6";
      case "dragon":
        return "#0a6cbf";
      case "psychic":
        return "#f67176";
      case "flying":
        return "#6892b0";
      case "fighting":
        return "#ce4069";
      case "normal":
        return "#8a8a8a";
      case "bug":
        return "#316520";
      case "poison":
        return "#ad61ae";
      case "ghost":
        return "#5269ac";
      case "dark":
        return "#5c5365";
      default:
        return null;
    }
  }};
`;
