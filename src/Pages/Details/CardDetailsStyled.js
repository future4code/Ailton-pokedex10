import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  margin-left: 50px;
  margin-top: -180px;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0px;
  }
`;
export const Loading = styled.img`
  margin-left: 350px;
  margin-top: 40px;
  width: 230px;
  height: 220px;

  @media screen and (max-width: 480px) {
    width: 130px;
    height: 120px;
    margin-left: 150px;
  }
`;

export const PrincipalCard = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 195px 195px;
  grid-gap: 20px;
  width: 900px;
  height: 410px;
  border-radius: 12px;
  position: relative;
  margin-left: 15px;
  z-index: 1;
  padding: 10px;

  @media screen and (max-width: 480px) {
    display: grid;
    width: 330px;
    height: 1060px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 195px 195px 195px 195px 195px;
  }
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

  @media screen and (max-width: 480px) {
    grid-column: 1/2;
    grid-row: 1/2;
    margin-top: -10px;
    margin-left: -15px;
    width: 130px;
  }
`;

export const ImagemPokemon = styled.div`
  display: flex;
  grid-column: 4/5;
  margin-top: -100px;

  img {
    width: 220px;
    height: 220px;
    z-index: 2;
  }
  @media screen and (max-width: 480px) {
    display: none;
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
  }

  @media screen and (max-width: 480px) {
    display: none;
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

export const Photo1 = styled.div`
  grid-column: 1/2;
  height: 160px;
  width: 160px;
  background-color: #fff;
  align-self: center;
  justify-self: center;
  border-radius: 20px;

  img {
    display: flex;
    margin-top: 15%;
    margin-left: 24%;
  }
  @media screen and (max-width: 480px) {
    height: 130px;
    width: 130px;
    grid-column: 2/3;
    margin-top: -60px;
  }
`;

export const InfoPoke = styled.div`
  grid-column: 2/3;
  height: 380px;
  width: 240px;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: -30px;
  display: flex;
  align-items: center;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }

  p {
    text-align: start;
    margin: 5px auto;
    padding: 1px;
    /* border-radius: 20px; */
    font-size: 11px;
    line-height: 2px;
    margin-left: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @media screen and (max-width: 480px) {
    grid-row: 2/3;
    grid-column: 1/4;
    margin-left: 30px;
    margin-top: -60px;
    height: 500px;
    width: 280px;

    h3 {
      margin-left: 100px;
    }

    p {
      margin-left: 80px;
    }
  }
`;

export const Moves = styled.div`
  grid-row: 2/3;
  height: 200px;
  width: 160px;
  background-color: #fff;
  align-self: flex-start;
  justify-self: center;
  border-radius: 20px;
  margin-top: -20px;

  h3 {
    font-family: Verdana;
    text-align: center;
  }

  p {
    text-align: center;
    margin: 5px auto;
    padding: 3px;
    width: 80px;
    border: 1px solid #ececec;
    background-color: #ececec;
    border-radius: 20px;
    font-size: 11px;
    line-height: 8px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30px;
    grid-row: 4/5;
    height: 155px;
    width: 330px;
    margin-left: 160px;
  }
`;

export const Evolutions = styled.div`
  display: flex;
  grid-row: 2/3;
  grid-column: 3/4;
  height: 250px;
  width: 400px;
  background-color: #fff;
  margin-top: -70px;
  border-radius: 20px;
  text-align: center;
  margin-left: -10px;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: Verdana;
    margin-left: 10px;
  }

  div {
    display: flex;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 330px;
    grid-row: 5/6;
    margin-top: -5px;
    margin-left: -370px;
  }
`;

export const ContainerEvolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #ececec;
  width: 120px;
  height: 130px;
  border-radius: 20px;
  font-size: 14px;
  color: grey;
  border: 1px solid #ececec;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  div {
    display: flex;
    gap: 5px;
  }
`;

export const ImageEvolution = styled.img`
  z-index: 2;
  width: 75px;
  height: 75px;
`;

export const BarStat = styled.div`
  height: 7px;
  background: ${(props) => {
    if (props.number < 50) {
      return "#ffdd69";
    } else if (props.number < 80) {
      return "#ff7c2d";
    } else {
      return "#e05704";
    }
  }};
  border-radius: 6px;
  width: ${({ percent }) => percent}%;
`;

export const BarStatLength = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    margin: 0;
    display: flex;
    font-size: 12px;
    justify-content: center;
  }
`;

export const ContainerStatAndBar = styled.div`
  width: 100%;
  display: flex;

  p {
    width: 12%;
  }

`

export const ContainerStatsMap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerStats = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`;

export const TotalText = styled.p`
  font-weight: bold;
`