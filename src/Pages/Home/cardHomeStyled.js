import styled from "styled-components";

export const PrincipalCard = styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  position: relative;
  border-radius: 12px;
  margin-left: 75px;
  margin-bottom: 60px;
  border: 1px solid white;
  box-shadow: 10px 5px 20px black;
  transition: all 0.1s;
  z-index: 1;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 2;
  width: 175px;
  height: 70px;
  /* border: 1px solid black; */

  h1 {
    display: flex;
    font-size: 26px;
    color: #ffffff;
    margin-left: 20px;
    font-family: Verdana;
    margin-bottom: 5px;
    margin-left: 20px;
  }

  h3 {
    margin-left: 20px;
    font-size: 12px;
    color: #ffffff;
    font-family: Verdana;
    margin-top: 25px;
    margin-bottom: -25px;
  }
`;

export const ImagemPokemon = styled.div`
  display: flex;
  margin-top: -60px;
  margin-left: -140px;

  img {
    width: 160px;
    height: 160px;
    z-index: 2;
    
  }
`;

export const ImagemBackground = styled.div`
  display: flex;
  margin-left: -155px;
  margin-top: 0px;

  img {
    width: 150px;
    height: 150px;
    opacity: 0.17;
    z-index: 1;
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
  /* border: 1px solid black; */
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
`;
export const PrincipalCardPoison= styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #e672f7;
  border-radius: 12px;
  margin-left: 75px;
  margin-bottom: 60px;
  border: 1px solid white;
  box-shadow: 10px 5px 20px black;
  transition: all 0.1s;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;
export const TypePoison = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 6px;
  width: 56px;
  height: 18px;
  background: #ad61ae;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  z-index: 2;
`;

export const PrincipalCardGrass= styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #729f92;
  border-radius: 12px;
  margin-left: 75px;
  margin-bottom: 60px;
  border: 1px solid white;
  box-shadow: 10px 5px 20px black;
  transition: all 0.1s;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const TypeGrass = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 6px;
  width: 56px;
  height: 18px;
  background: #70b873;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const PrincipalCardFire= styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #EAAB7D;
  border-radius: 12px;
  margin-left: 75px;
  margin-bottom: 60px;
  border: 1px solid white;
  box-shadow: 10px 5px 20px black;
  transition: all 0.1s;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const PrincipalCardFlying= styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #0667ac;
  border-radius: 12px;
  margin-left: 75px;
  margin-bottom: 60px;
  border: 1px solid white;
  box-shadow: 10px 5px 20px black;
  transition: all 0.1s;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const PrincipalCardWater= styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #004170;
  border-radius: 12px;
  margin-left: 75px;
  margin-bottom: 60px;
  border: 1px solid white;
  box-shadow: 10px 5px 20px black;
  transition: all 0.1s;
    cursor: pointer;

  :hover{
-webkit-transform: scale(1.03);
    transform: scale(1.03);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -160px;
  margin-top: 140px;
`;

export const DetailButton = styled.button`
  display: flex;
  flex-direction: row;
  color: #fff;
  margin-top: 5px;
  text-decoration: underline;
  font-family: Verdana;
  background: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  z-index: 2;

  :hover {
    color: #012231;
    text-decoration: none;
    
  }
`;
export const CaptureButton = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffffff;
  margin-left: 110px;
  `
  export const ButtonCapture = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 116px;
    height: 28px;
    z-index: 2;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    line-height: 24px;
    font-family: Verdana;
    font-weight: bold;
    -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  
  :hover {
    background: #014059;
    color: #fff;
    font-weight: bold;
    font-size: 17px;

    box-shadow: 0 0 40px 40px #014059 inset;
  }

`;

export const Capturado = styled.button`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 116px;
    height: 28px;
    z-index: 2;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    line-height: 24px;
    font-family: Verdana;
    font-weight: bold;
    -webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
:hover{
  background: #fff;
    font-weight: bold;
    font-size: 15px;

}
`