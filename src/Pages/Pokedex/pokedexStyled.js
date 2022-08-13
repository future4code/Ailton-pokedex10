import styled from "styled-components";

export const Container = styled.div`
  background-color: #dc3037;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  z-index: 1;

  @media screen and (max-width: 480px) {
  }
`;

export const ContainerMap = styled.div`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: -40px;
  padding-bottom: 30px;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 116px;
  height: 28px;
  z-index: 2;
  background-color: white;
  box-shadow: 1px 2px 3px black;
  color: #d5011d;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-family: Verdana;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  :hover {
    background-color: #d5011d;
    color: white;
    font-weight: bold;
    font-size: 17px;
    box-shadow: 1px 2px 3px black;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 22px;
    font-size: 15px;
  }
`;

export const HeaderPokedex = styled.img`
  display: flex;
  justify-content: end;
  margin-left: 575px;
  margin-top: -70px;
  z-index: 1;

  @media screen and (max-width: 480px) {
    width: 300px;
    margin-left: 70px;
  }
`;

export const ButtonBattle = styled.button`
  position: absolute;
  top: 0;
  right: 10%;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  border-radius: 10%;
  background-color: #015e82;
  color: white;
  border: none;
  font-size: 15px;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  :hover {
    background: black;
    color: #d5011d;
    font-size: 16px;
    box-shadow: 0 0 40px 40px black inset;
  }
  @media screen and (max-width: 480px) {
    margin-top: 120px;
    right: 40%;
  }
`;

export const ContainerBattle = styled.div`
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

  @media screen and (max-width: 480px) {
    margin-top: 95px;
    margin-left: -95px;
    width: 320px;
    height: 150px;

    p {
      font-size: 25px;
      margin: 0;
    }
  }
`;

export const ImageFirstPokemon = styled.img`
  -webkit-transform: rotateY(180deg);
  z-index: 2;
`;
export const OtherPokemon = styled.button`
  color: black;
  box-shadow: 1px 1px 3px;
  background-color: transparent 50%;
  border-radius: 8px;
  border: none;
  font-size: 13px;
  line-height: 24px;
  font-family: Verdana;
  z-index: 2;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;
export const ContainerFirstPokemon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;

  p {
    z-index: 2;
    color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export const ContainerSecondPokemon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;

  p {
    z-index: 2;
    color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const ContainerBattlePokemons = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
`;

export const ImageSecondPokemon = styled.img`
  z-index: 2;
`;

export const ImageUpToBattle = styled.img`
  width: 45px;
  height: 25px;
  position: absolute;
  left: 26%;
  bottom: 39%;
  z-index: 2;
`;

export const ImageBackground = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  transform: rotate(30deg);
  opacity: 0.17;
  z-index: 1;
  top: 5px;
`;

export const ContainerBattleee = styled.div`
  margin: -150px 0 100px 31.5%;

  @media screen and (max-width: 480px) {
  }
`;

export const ContainerPickYourPokemons = styled.div`
  position: absolute;
  left: 42%;
  top: 33%;
  background-color: #e3767b;
  border-radius: 6px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  @media screen and (max-width: 480px) {
    margin-top: 150px;
    z-index: 2;
    margin-bottom: 50px;
    left: 23%;
   background-color: white;
    color: black;
    font-weight: bold;
    box-shadow: 1px 2px 3px;
  }
`;

export const ButtonsBattle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 116px;
  height: 28px;
  z-index: 2;
  color: white;
  background: black;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  line-height: 24px;
  font-family: Verdana;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  :hover {
    background: #d5011d;
    color: #fff;
    font-weight: bold;
    font-size: 17px;

    box-shadow: 0 0 40px 40px #d5011d inset;
  }
`;

export const ButtonsBattleHide = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 116px;
  height: 28px;
  z-index: 2;
  display: hidden;
  color: green;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  line-height: 24px;
  font-family: Verdana;
  font-weight: bold;
  -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;
