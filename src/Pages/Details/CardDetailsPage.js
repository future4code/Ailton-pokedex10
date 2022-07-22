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

  // console.log(pokemonsEvolution, getId)  POKEMONS EVOLUÇÃO

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

  return (
    <Container>
      {pokemonDetail.name && pokemonDetail.types ? (
        <PrincipalCard>
          <Photo1>
            <h3>Foto1</h3>
          </Photo1>
          <Photo2>
            <h3>Foto2</h3>
          </Photo2>
          <InfoPoke>
            <h3>Info</h3>
            {pokemonDetail.stats.map((stats) => {
              return <p>{stats.stat.name} - {stats.base_stat}</p>
            })}
          </InfoPoke>
          <Moves>
            <h3>Moves</h3>:
            <div>
              {pokemonDetail.moves.slice(0, 4).map((moves) => {
                return <p>{moves.move.name}</p>;
              })}
            </div>
          </Moves>
          <Evolutions>
          <h3>Evolutions</h3>
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
