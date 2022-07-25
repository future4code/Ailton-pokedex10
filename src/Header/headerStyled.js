import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  grid-column: 1/4;
  width: 100%;
  height: 85px;
  align-items: center;
  justify-content: space-between;
  background: #b7c3c8;
  margin-bottom: 110px;
  /* margin-bottom: 20%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2; */

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 85px;
    display: flex;
    /* flex-direction: column-reverse; */
  }


`;

export const ImagemContainer = styled.img`
  width: 307px;
  height: 113px;
  margin: auto;
  padding-top: 15px;
  padding-left: 50px;
  transition: all 1s;
  cursor: pointer;

  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px){
      padding-left: 10px;
      padding-top: 25px;
      width: 287px;
      height: 95px;
      
  }
`;
export const ButtonContainer = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin-right: 20px;
  transition: all 1s;
  cursor: pointer;

  @media screen and (max-width: 480px){
    width: 65px;
  height: 65px;
  margin-left: 10px;

  }
  :hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

