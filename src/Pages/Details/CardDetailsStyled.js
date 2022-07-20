import styled from "styled-components";

export const Container = styled.div`
  border-radius: 12px;
  margin-left: 50px;
  margin-top: -50px;
`;

export const PrincipalCard = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 240px 240px;
  grid-gap: 20px;
  width: 900px;
  height: 490px;
  background: #729f92;
  border-radius: 12px;
  margin-left: 50px;
  margin-top: -150px;
  padding: 10px; ;
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
    width: 210px;
    height: 210px;
    z-index: 2;
  }
`;

export const ImagemBackground = styled.div`
  display: flex;
  grid-column: 4/5;
  margin-top: -270px;
  margin-left: -340px;
  z-index: 1;

  img {
    width: 508px;
    height: 510px;
    opacity: 0.17;
    transform: rotate(30deg);
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 2;
`;

export const TypeOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 9px;
  width: 75px;
  height: 21px;
  background: #ad61ae;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  margin-left: 20px;

  p {
    width: 46px;
    height: 21px;
    font-weight: bold;
    font-size: 13px;
    line-height: 21px;
    color: #ffffff;
    font-family: Verdana;
  }
`;

export const TypeTwo = styled.div`
  display: flex;
  z-index: 2;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 10px;
  width: 69px;
  height: 21px;
  background: #70b873;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;

  p {
    width: 41px;
    height: 21px;
    font-weight: bold;
    font-size: 13px;
    line-height: 21px;
    color: #ffffff;

    font-family: Verdana;
  }
`;

export const Photo1 = styled.div`
  grid-column: 1/2;
  height: 200px;
  width: 200px;
  background-color: #fff;
  align-self: flex-end;
  justify-self: end;
  border-radius: 20px;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }
`;

export const Photo2 = styled.div`
  grid-row: 2/3;
  height: 200px;
  width: 200px;
  background-color: #fff;
  align-self: flex-start;
  justify-self: end;
  border-radius: 20px;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }
`;

export const InfoPoke = styled.div`
  grid-column: 2/3;
  height: 425px;
  width: 220px;
  background-color: #fff;
  margin-top: 35px;
  border-radius: 20px;

  h3 {
    margin-left: 10px;
    font-family: Verdana;
  }
`;

export const Moves = styled.div`
  display: flex;
  grid-row: 2/2;
  grid-column: 3/4;
  height: 270px;
  width: 200px;
  background-color: #fff;
  margin-top: -70px;
  border-radius: 20px;
  text-align: center;

  h3 {
    font-family: Verdana;
    margin-left: 10px;
  }
`;
