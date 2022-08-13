import React from "react";
import Header from "../../Header/Header";
import CardDetailsPage from "./CardDetailsPage";
import { Container, Card } from "./detailsStyled";

const DetailsPage = () => {
  return (
    <Container>
      <Header />
      <Card>
        <CardDetailsPage />
      </Card>
    </Container>
  );
};

export default DetailsPage;
