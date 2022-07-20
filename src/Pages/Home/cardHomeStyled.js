import styled from "styled-components";

export const PrincipalCard = styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #729f92;
  border-radius: 12px;
  margin-left: 80px;
  margin-bottom: 60px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 2;

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
  margin-left: -148px;

  img {
    width: 160px;
    height: 160px;
    z-index: 2;
  }
`;

export const ImagemBackground = styled.div`
  display: flex;
  margin-left: -150px;
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
  margin-left: 5px;
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

export const TypeFire = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #F44900;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeFlying = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #6892B0;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeWater = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #33A4F5;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeBug = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #316520;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeNormal = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #8A8A8A;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeDark = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #5C5365;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeDragon = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #0A6CBF;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeElectric = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #F4D23B;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeFairy = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #EC8FE6;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeFighting = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #CE4069;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeGhost = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #5269AC;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const TypeGround = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #D97745;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;
export const TypeIce = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #74CEC0;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;
export const TypePsychic = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #F67176;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;
export const TypeRock = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #C7B78B;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;
export const TypeSteel = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  width: 56px;
  height: 18px;
  background: #BBBBBB;
  /* background: ${(props) => props.color}; */
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -145px;
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

  button {
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
  }

  button:hover {
    background: #d5011d;
    color: #fff;
    font-weight: bold;
    font-size: 17px;

    box-shadow: 0 0 40px 40px #d5011d inset;
  }
  button:active {
    color: #d5011d;
  }
`;
