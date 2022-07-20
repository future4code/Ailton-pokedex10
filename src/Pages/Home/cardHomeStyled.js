import styled from "styled-components";

export const PrincipalCard = styled.div`
  display: flex;
  width: 340px;
  height: 180px;
  background: #729f92;
  border-radius: 12px;
  margin-left: 100px;
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
`;

export const TypeOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  gap: 6px;
  width: 55px;
  height: 18px;
  background: #ad61ae;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  margin-left: 20px;
  z-index: 2;
  img {
    height: 14px;
  }
  p {
    font-weight: bold;
    font-size: 10px;
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
  gap: 5px;
  width: 45px;
  height: 18px;
  background: #70b873;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;

  img {
    height: 14px;
  }

  p {
    width: 41px;
    height: 21px;
    font-weight: bold;
    font-size: 10px;
    line-height: 21px;
    color: #ffffff;

    font-family: Verdana;
  }
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
