import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./homePageStyled";
import CardHomePage from "./CardHomePage";
import Header from "../../Header/Header";
import axios from "axios";

const HomePage = () => {
  // const navigate = useNavigate();
  const [infoPokemons, setInfoPokemons] = useState();

  useEffect(() => {
    listPokemons();
  }, []);

  const listPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      const pokemonsDetails = res.data.results.map(({ url }) =>
        axios.get(url).then((res) => {
          return res.data;
        })
      );
      Promise.all(pokemonsDetails).then((res) => setInfoPokemons(res));
    });
  };

  console.log(infoPokemons)

  const renderPokemons = infoPokemons?.map((pokemon) => {
    return (
      <div>
        {/* <p>{pokemon.id}. {pokemon.name}</p>
        <p>{pokemon.types[0].type.name}</p>
        <p>{pokemon.types[1]?.type.name}</p> */}
      </div>
    )
  })

  return (
    <Container>
       <Header/>
           <h2>Todos os Pokémons</h2>
      <CardHomePage/>
      <CardHomePage/>
      <CardHomePage/>
      <CardHomePage/>
      {/* {renderPokemons} */}
    </Container>
  );
};

export default HomePage;
