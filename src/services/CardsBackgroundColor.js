import styled from "styled-components";

export const CardsBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  z-index: -1;
  background-color: ${(props) => {
    switch (props.color) {
      case "grass":
        return "#729f92";
      case "steel":
        return "#c5c0c0";
      case "fire":
        return "#EAAB7D";
      case "electric":
        return "#f5e491";
      case "water":
        return "#71C3FF";
      case "ice":
        return "#b7e3f9";
      case "ground":
        return "#f7cca2";
      case "rock":
        return "#e3d7b4";
      case "fairy":
        return "#edb6f7";
      case "dragon":
        return "#97b3e6";
      case "psychic":
        return "#f79598";
      case "flying":
        return "#f5f5f5";
      case "fighting":
        return "#f2c4c4";
      case "normal":
        return "#BF9762";
      case "bug":
        return "#76A866";
      case "poison":
        return "#b578ae";
      case "ghost":
        return "#7185be";
      case "dark":
        return "#78747d";
      default:
        return null;
    }
  }};
`;
