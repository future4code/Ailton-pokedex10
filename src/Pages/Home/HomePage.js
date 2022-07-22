import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./homePageStyled";
import CardHomePage from "./CardHomePage";
import Header from "../../Header/Header";
import axios from "axios";

const HomePage = () => {

  return (
    <Container>
       <Header/>
           {/* <h2>Pokémons </h2> */}
      <CardHomePage />
    </Container>
  );
};

export default HomePage;
