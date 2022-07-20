import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  TypeOne,
  TypeTwo,
  DetailButton,
  CaptureButton,
  Info,
  Types,
  Buttons,
} from "./cardHomeStyled";
import Poison from "../../assests/img/Poison.png";
import Grass from "../../assests/img/Grass.png";
import Pokebola from "../../assests/img/Pokebola.png";
import { goToDetails } from "../../Routes/coordinator";

const CardHomePage = () => {
  const navigate = useNavigate();

  return (
    <PrincipalCard>
      <Info>
        <h3>#01</h3>
        <h1>Bulbasaur</h1>
        <Types>
          <TypeOne>
            <img src={Poison} /> <p>Poison</p>
          </TypeOne>
          <TypeTwo>
            <img src={Grass} /> <p>Grass</p>
          </TypeTwo>
        </Types>
      </Info>
      <Buttons>
        <DetailButton onClick={() => goToDetails(navigate)}>
          Detalhes
        </DetailButton>
        <CaptureButton>
          {" "}
          <button>Capturar!</button>
        </CaptureButton>
      </Buttons>
      <ImagemPokemon>
        <img src="https://s3-alpha-sig.figma.com/img/19c3/3fd9/d832a8c76ffbb97d6d40584fe3ac6445?Expires=1659312000&Signature=NDiAJRoioqLGucOvLLqFCef5ssUfDjvAdb1T~YMyB7uUZ9gAgsO1wevEHrnHHmF5d6nYJSbZv2SOplc0Mm7EiiqdhorEsW3AsKsZXpRh~f3zejJg5SFASwIaX8W2BVS5D4iewBMsxJ01q-XwhnOONLB5fdZ4i~2zMzR93fVBA3vaaEdC32yLIV612b8vCjfxPMxRym10M2WCOSGCuErFJN8W9oztFigTT2MQAuiJoQSoAdhfMQN9BAHBXdayyWHPLZA1iWvw6JjEy90~LjZzb1seDspA81o7ldziZ7M0osBRv0SH7hnQxkNMYoW2E8q4ZlTZZf2TF4FbgIlzdfi4Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </ImagemPokemon>
      <ImagemBackground>
        <img src={Pokebola} />
      </ImagemBackground>
    </PrincipalCard>
  );
};

export default CardHomePage;
