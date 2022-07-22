import styled from "styled-components";

export const CardsBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: ${(props) => {
    switch (props.color) {
      case "grass":
        return "#729f92";
      case "steel":
        return "#f4f4f4";
      case "fire":
        return "#EAAB7D";
      case "electric":
        return "#fcf7de";
      case "water":
        return "#71C3FF";
      case "ice":
        return "#def3fd";
      case "ground":
        return "#f4e7da";
      case "rock":
        return "#d5d5d4";
      case "fairy":
        return "#fceaff";
      case "dragon":
        return "#97b3e6";
      case "psychic":
        return "#eaeda1";
      case "flying":
        return "#f5f5f5";
      case "fighting":
        return "#f5f5f5";
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
