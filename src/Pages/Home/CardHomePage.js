import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../Routes/coordinator";
import {CardHomeContainer} from "./cardHomeStyled"
import {PrincipalCard} from "./cardHomeStyled"
import {ImagemPokemon} from "./cardHomeStyled"
import {ImagemBackground} from "./cardHomeStyled"
import {TypeOne} from "./cardHomeStyled"
import {DetailButton} from "./cardHomeStyled"
import Poison from "../../assests/img/Poison.png"

const CardHomePage = () => {
  return (
    <CardHomeContainer>
        <PrincipalCard>
      <h3>#01</h3>
      <h1>Bulbasaur</h1>
      <ImagemPokemon src="https://s3-alpha-sig.figma.com/img/19c3/3fd9/d832a8c76ffbb97d6d40584fe3ac6445?Expires=1659312000&Signature=NDiAJRoioqLGucOvLLqFCef5ssUfDjvAdb1T~YMyB7uUZ9gAgsO1wevEHrnHHmF5d6nYJSbZv2SOplc0Mm7EiiqdhorEsW3AsKsZXpRh~f3zejJg5SFASwIaX8W2BVS5D4iewBMsxJ01q-XwhnOONLB5fdZ4i~2zMzR93fVBA3vaaEdC32yLIV612b8vCjfxPMxRym10M2WCOSGCuErFJN8W9oztFigTT2MQAuiJoQSoAdhfMQN9BAHBXdayyWHPLZA1iWvw6JjEy90~LjZzb1seDspA81o7ldziZ7M0osBRv0SH7hnQxkNMYoW2E8q4ZlTZZf2TF4FbgIlzdfi4Cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
      <ImagemBackground src="https://s3-alpha-sig.figma.com/img/edc3/ee83/1fe5d699598202db97e045156119ece3?Expires=1659312000&Signature=aqZcfBFe4BQjGCpVIuC8yvbGbroWLcR-rgTTvBH-Ousvp9q4dy67AExs4b6u76WBNW34UL~FKc7O1A5n5huQkQLIEHY74szVAikM2WrFnUwJ6dFQwOG0ZaC8azcDQefCdTbqc5aPWTA-9bXZjBlg7uens0~7uBAQxUEvT3VuJjPuvfRVDceTGN4gFcUOdGxpOU7amhngiDZDKeHCUgRcIE1UR-7ZAPc3bEnaHoOLmVKbiAN8aVX1nl6VNe1W~yah3EePVAn1nk28EmQzkuXXdGev7nWC~MOYusR46IbJzHSgUq4we2VFKCG2JiYq3kUm~UAPrXp5~-~3JRw4xak1yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
      <TypeOne>
        <img src={Poison}/>
        <p>Poison</p>
      </TypeOne>
      <div>
        <p>Grass</p>
      </div>
        <DetailButton>Detalhes</DetailButton>
        <button>Capturar!</button>
      </PrincipalCard>
    </CardHomeContainer>
  );
};

export default CardHomePage;
