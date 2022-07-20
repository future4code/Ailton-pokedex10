import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator";
import Header from "../../Header/Header";
import CardDetailsPage from "./CardDetailsPage";
import { Container, Card, ButtonHome } from "./detailsStyled";

const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <ButtonHome onClick={() => goToHome(navigate)}>
        Todos os Pokemons
      </ButtonHome>
      <h2>DetailsPage</h2>
      <Card>
        <CardDetailsPage />
      </Card>
    </Container>
  );
};

export default DetailsPage;
