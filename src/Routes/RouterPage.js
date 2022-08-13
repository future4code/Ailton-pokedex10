import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/HomePage";
import Details from "../Pages/Details/DetailsPage";
import Pokedex from "../Pages/Pokedex/PokedexPage";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name/:id" element={<Details />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
