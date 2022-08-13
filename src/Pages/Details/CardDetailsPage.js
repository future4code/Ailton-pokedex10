import React, { useContext, useEffect, useState } from "react";
import {
  PrincipalCard,
  ImagemPokemon,
  ImagemBackground,
  Info,
  Types,
  Container,
  Photo1,
  InfoPoke,
  Moves,
  Loading,
  Evolutions,
  ContainerEvolution,
  ImageEvolution,
  BarStat,
  BarStatLength,
  Stats,
  ContainerStatAndBar,
  ContainerStatsMap,
  ContainerStats,
  TotalText,
} from "./CardDetailsStyled";
import Pokebola from "../../assests/img/Pokebola.png";
import { GlobalContext } from "../../global/GlobalContext";
import { CardsBackground } from "../../services/CardsBackgroundColor";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingGif from "../../assests/img/loading.gif";

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
  const urlGif = `https://pokemon-react-635a4.web.app/images/animated/${pathParams.id}.gif`;

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
          <InfoPoke>
            <ContainerStats>
              {pokemonDetail.stats.map((stats, index) => {
                return (
                  <ContainerStatsMap>
                    <Stats>
                      <p>
                        <strong>{statsName[index]}</strong>
                      </p>
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
