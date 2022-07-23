import React, { useContext, useEffect, useState } from "react";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  Info,
  Types,
  Container,
  Photo1,
  Photo2,
  InfoPoke,
  Moves,
  Loading,
  Evolutions,
} from "./CardDetailsStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import { GlobalContext } from "../../global/GlobalContext";
import { CardsBackground } from "../CardsBackgroundColor";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingGif from "../../assests/img/loading.gif";
import styled from "styled-components";

const ContainerEvolution = styled.div`
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

const ImageEvolution = styled.img`
  z-index: 2;
  width: 75px;
  height: 75px;
`;

const BarStat = styled.div`
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

const BarStatLength = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

const Stats = styled.div`
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

const ContainerStatAndBar = styled.div`
  width: 100%;
  display: flex;

  p {
    width: 12%;
  }

`

const ContainerStatsMap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerStats = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`;

const TotalText = styled.p`
  font-weight: bold;
`

const CardHomePage = () => {
  const pathParams = useParams();

  const values = useContext(GlobalContext);

  const [pokemonDetail, setPokemonDetail] = useState({});
  const [pokemonsEvolution, setPokemonsEvolution] = useState([]);
  const [getId, setGetId] = useState([]);

  useEffect(() => {
    getDetails();
    getEvolutions();
  }, []);

  const getDetails = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pathParams.name}`)
      .then((res) => {
        setPokemonDetail(res.data);
      });
  };

  console.log(pokemonDetail);

  const getEvolutions = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pathParams.name}/`)
      .then((res) => {
        axios.get(res.data.evolution_chain.url).then((res) => {
          if (
            res.data.chain.evolves_to[0].species.name &&
            res.data.chain.evolves_to[0].evolves_to[0]?.species.name
          ) {
            setPokemonsEvolution([
              res.data.chain.species.name,
              res.data.chain.evolves_to[0].species.name,
              res.data.chain.evolves_to[0].evolves_to[0]?.species.name,
            ]);
            setGetId([
              res.data.chain.species.url.slice(42, -1),
              res.data.chain.evolves_to[0].species.url.slice(42, -1),
              res.data.chain.evolves_to[0].evolves_to[0]?.species.url.slice(
                42,
                -1
              ),
            ]);
          } else if (res.data.chain.evolves_to[0].species.name) {
            setPokemonsEvolution([
              res.data.chain.species.name,
              res.data.chain.evolves_to[0].species.name,
            ]);
            setGetId([
              res.data.chain.species.url.slice(42, -1),
              res.data.chain.evolves_to[0].species.url.slice(42, -1),
            ]);
          } else {
            setPokemonsEvolution([res.data.chain.species.name]);
            setGetId([res.data.chain.species.url.slice(42, -1)]);
          }
        });
      });
  };

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pathParams.id}.png`;
  const urlPhoto1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pathParams.id}.png`;
  const urlGif = `https://pokemon-react-635a4.web.app/images/animated/${pathParams.id}.gif`;
  console.log(pokemonDetail);

  const statsName = ["HP", "Attack", "Defense", "Sp.Atk", "Sp.Def", "Speed"];

  const statsTotal = () => {
    const statsTotal = pokemonDetail.stats
      .map((stats) => {
        return stats.base_stat;
      })
      .reduce((prev, curr) => prev + curr, 0);
    return statsTotal;
  };

  return (
    <Container>
      {pokemonDetail.name && pokemonDetail.types ? (
        <PrincipalCard>
          <CardsBackground
            color={pokemonDetail.types[0].type.name}
          ></CardsBackground>
          <Photo1>
            <img src={urlGif} alt="pokemon" width="80px" />
          </Photo1>
          {/* <Photo2>
            <img src={urlPhoto1} alt="pokemon" width="80px" />
          </Photo2> */}
          <InfoPoke>
            <ContainerStats>
              {pokemonDetail.stats.map((stats, index) => {
                return (
                  <ContainerStatsMap>
                    <Stats>
                      <p><strong>{statsName[index]}</strong></p>
                      <ContainerStatAndBar>
                        <p>{stats.base_stat}</p>
                        <BarStatLength>
                          <BarStat
                            percent={stats.base_stat}
                            number={stats.base_stat}
                          ></BarStat>
                        </BarStatLength>
                      </ContainerStatAndBar>
                    </Stats>
                    <hr width="90%" />
                  </ContainerStatsMap>
                );
              })}
              <TotalText>Total: {statsTotal()}</TotalText>
            </ContainerStats>
          </InfoPoke>
          <Moves>
            <h3>Moves:</h3>
            <div>
              {pokemonDetail.moves.slice(0, 4).map((moves) => {
                return <p>{moves.move.name}</p>;
              })}
            </div>
          </Moves>
          <Evolutions>
            <h3>Evolutions</h3>
            <div>
              {pokemonsEvolution.map((pokemon, index) => {
                return (
                  <ContainerEvolution>
                    <div>
                      <p>#{getId[index]}</p>
                      <p>{pokemon[0].toUpperCase() + pokemon.substring(1)}</p>
                    </div>
                    <ImageEvolution
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getId[index]}.png`}
                      alt="pokemon"
                    />
                  </ContainerEvolution>
                );
              })}
            </div>
          </Evolutions>
          <Info>
            <h3>#0{pokemonDetail.id}</h3>
            <h1>
              {pokemonDetail.name[0].toUpperCase() +
                pokemonDetail.name.substring(1)}
            </h1>
            <Types>
              {pokemonDetail.types.map((types) => {
                return values.typeBackgroundColor(types.type.name);
              })}
            </Types>
          </Info>
          <ImagemPokemon>
            <img src={url} alt="pokemon" />
          </ImagemPokemon>
          <ImagemBackground>
            <img src={Pokebola} alt="pokebola" />
          </ImagemBackground>
        </PrincipalCard>
      ) : (
        <Loading src={LoadingGif} />
      )}
    </Container>
  );
};

export default CardHomePage;
