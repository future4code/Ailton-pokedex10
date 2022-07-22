import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  margin-left: 50px;
  margin-top: -180px;
`;
export const Loading = styled.img`
  margin-left: 350px;
  margin-top: 40px;
  width: 230px;
  height: 220px;
`;

export const PrincipalCard = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 195px 195px;
  grid-gap: 20px;
  width: 900px;
  height: 410px;
  background: #729f92;
  border-radius: 12px;
  margin-left: 50px;
  /* margin-top: -150px; */
  padding: 10px; 
`;

export const Info = styled.div`
  display: flex;
  height: 150px;
  width: 220px;
  flex-direction: column;
  grid-column: 3/4;
  gap: 5px;
  margin-left: 0px;

  h1 {
    display: flex;
    font-size: 27px;
    color: #ffffff;
    margin-left: 20px;
    font-family: Verdana;
    margin-bottom: 10px;
    margin-left: 20px;
  }

  h3 {
    margin-left: 20px;
    font-size: 16px;
    color: #ffffff;
    font-family: Verdana;
    margin-top: 35px;
    margin-bottom: -25px;
  }
`;

export const ImagemPokemon = styled.div`
  display: flex;
  grid-column: 4/5;
  margin-top: -100px;
  margin-left: -50px;

  img {
    width: 220px;
    height: 220px;
    z-index: 2;
  }
`;

export const ImagemBackground = styled.div`
  display: flex;
  grid-column: 4/5;
  margin-top: -225px;
  margin-left: -260px;
  z-index: 1;

  img {
    width: 430px;
    height: 430px;
    opacity: 0.17;
    transform: rotate(30deg);
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: 20px;
  width: 150px;
  height: 30px;
`;

export const Icon = styled.img`
  height: 14px;
`;

export const TypeText = styled.p`
  font-weight: bold;
  font-size: 10px;
  line-height: 21px;
  color: #ffffff;
  font-family: Verdana;
  `

export const Photo1 = styled.div`
  grid-column: 1/2;
  height: 160px;
  width: 160px;
  background-color: #fff;
  align-self: end;
  justify-self: center;
  border-radius: 20px;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }
`;

export const Photo2 = styled.div`
  grid-row: 2/3;
  height: 160px;
  width: 160px;
  background-color: #fff;
  align-self: flex-start;
  justify-self: center;
  border-radius: 20px;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }
`;

export const InfoPoke = styled.div`
  grid-column: 2/3;
  height: 180px;
  width: 250px;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: -30px;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }
`;

export const Moves = styled.div`
  display: flex;
  grid-row: 2/2;
  grid-column: 2/3;
  height: 180px;
  width: 250px;
  background-color: #fff;
  margin-top: 0px;
  border-radius: 20px;
  text-align: center;
  margin-left: -30px;

  h3 {
    font-family: Verdana;
    margin-left: 10px;
  }
`;

export const Evolutions = styled.div`
  display: flex;
  grid-row: 2/2;
  grid-column: 3/4;
  height: 250px;
  width: 370px;
  background-color: #fff;
  margin-top: -70px;
  border-radius: 20px;
  text-align: center;
  margin-left: 5px;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: Verdana;
    margin-left: 10px;
  }

  div {
    display: flex;
  }
`;