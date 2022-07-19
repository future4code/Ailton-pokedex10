import styled from "styled-components";

export const CardHomeContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 2455px;

  background: #5e5e5e;
`;

export const PrincipalCard = styled.div`
  position: absolute;
  width: 440px;
  height: 210px;
  left: 0px;
  top: 0px;
  background: #729f92;
  border-radius: 12px;

  h1 {
    position: absolute;
    width: 159px;
    height: 39px;
    left: 23px;
    top: 40px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }

  h3 {
    position: absolute;
    width: 30px;
    height: 19px;
    left: 23px;
    top: 25px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;

export const ImagemPokemon = styled.img`
  position: absolute;
  width: 193px;
  height: 193px;
  left: 274px;
  top: 294px;
`;

export const ImagemBackground = styled.img`
  position: absolute;
  width: 210.73px;
  height: 210.73px;
  left: 294.37px;
  top: -62px;
  opacity: 0.17;
  transform: rotate(30deg);
`;

export const TypeOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 8px;
  gap: 17px;

  position: absolute;
  width: 99px;
  height: 31px;
  left: 23px;
  top: 89px;

  background: #ad61ae;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;

  p {
    width: 46px;
    height: 21px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  img{
    
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

  }
`;


export const DetailButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

width: 146px;
height: 38px;

background: #FFFFFF;
border-radius: 8px;

flex: none;
order: 1;
flex-grow: 0;
`


