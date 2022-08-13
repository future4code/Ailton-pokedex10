import styled from "styled-components";

export const ContainerAlertSweet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  #container-background {
    position: relative;
    width: 250px;
    height: 100%;

    p {
      margin: 5px;
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  .swal-button {
    padding: 7px 19px;
    border-radius: 2px;
    background-color: red;
    font-size: 12px;
    border: 1px solid #3e549a;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 26px;
    font-weight: bold;
  }

  #type-text {
    display: flex;
    gap: 5px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  color: ${(props) => {
    switch (props.color) {
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
