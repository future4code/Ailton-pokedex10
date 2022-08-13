import swal from "@sweetalert/with-react";
import "./style.css";
import { ContainerAlertSweet, Span } from "./style";
import { CardsBackground } from "../CardsBackgroundColor";

export const alertBattleAdvantage = (
  pokemon1,
  pokemon2,
  pokemon1Status,
  pokemon2Status
) => {
  swal({
    buttons: {
      confirm: {
        text: "Ok",
        className: "alert-sweet-button",
        closeModal: true,
      },
    },
    content: (
      <ContainerAlertSweet>
        <div id="container-background">
          <CardsBackground color={pokemon1.types[0].type.name} />
          <h1>{pokemon1.name[0].toUpperCase() + pokemon1.name.substring(1)}</h1>
          <img
            src={pokemon1.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
          <p>Venceu esta batalha!</p>
        </div>
        <p>
          {pokemon1Status * 1.3} (+30%) pontos VS {pokemon2Status} pontos
        </p>
        <div id="type-text">
          <Span color={pokemon1.types[0].type.name}>{pokemon1.types[0].type.name[0].toUpperCase() + pokemon1.types[0].type.name.substring(1)}</Span>
          <Span>possui vantagem contra</Span>
          <Span color={pokemon2.types[0].type.name}>{pokemon2.types[0].type.name[0].toUpperCase() + pokemon2.types[0].type.name.substring(1)}</Span>
        </div>
      </ContainerAlertSweet>
    ),
  });
};

export const alertBattleAdvantageLost = (
    pokemon1,
    pokemon2,
    pokemon1Status,
    pokemon2Status
  ) => {
    swal({
      buttons: {
        confirm: {
          text: "Ok",
          className: "alert-sweet-button",
          closeModal: true,
        },
      },
      content: (
        <ContainerAlertSweet>
          <div id="container-background">
            <CardsBackground color={pokemon2.types[0].type.name} />
            <h1>{pokemon2.name[0].toUpperCase() + pokemon2.name.substring(1)}</h1>
            <img
              src={pokemon2.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
            <p>Venceu esta batalha mesmo</p>
            <p>com desvantagem!</p>
          </div>
          <p>
            {pokemon2Status} pontos VS {pokemon1Status * 1.3} (+30%) pontos
          </p>
          <div id="type-text">
            <Span color={pokemon2.types[0].type.name}>{pokemon2.types[0].type.name[0].toUpperCase() + pokemon2.types[0].type.name.substring(1)}</Span>
            <Span>possui desvantagem contra</Span>
            <Span color={pokemon1.types[0].type.name}>{pokemon1.types[0].type.name[0].toUpperCase() + pokemon1.types[0].type.name.substring(1)}</Span>
          </div>
        </ContainerAlertSweet>
      ),
    });
  };

  export const alertBattleAdvantageDraw = () => {
    swal({
      buttons: {
        confirm: {
          text: "Ok",
          className: "alert-sweet-button",
          closeModal: true,
        },
      },
      content: (
        <ContainerAlertSweet>
            <h1>Empataram!</h1>
        </ContainerAlertSweet>
      ),
    });
  };
  
  export const alertBattle = (
    pokemon1,
    pokemon2,
    pokemon1Status,
    pokemon2Status
  ) => {
    swal({
      buttons: {
        confirm: {
          text: "Ok",
          className: "alert-sweet-button",
          closeModal: true,
        },
      },
      content: (
        <ContainerAlertSweet>
          <div id="container-background">
            <CardsBackground color={pokemon1.types[0].type.name} />
            <h1>{pokemon1.name[0].toUpperCase() + pokemon1.name.substring(1)}</h1>
            <img
              src={pokemon1.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
            <p>Venceu esta batalha!</p>
          </div>
          <p>
            {pokemon1Status} pontos VS {pokemon2Status} pontos
          </p>
        </ContainerAlertSweet>
      ),
    });
  };