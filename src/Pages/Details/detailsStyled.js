import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #012231;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 113px 150px 900px;
  flex-direction: column;
  padding-bottom: 30px;

  h2 {
    grid-row: 2/3;
    padding: 40px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
  }
`;
export const Card = styled.div`
  background-color: #012231;
  grid-row: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ButtonHome = styled.button`
  display: flex;
  flex-direction: row;
  color: #012231;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 240px;
  height: 34px;
  font-family: Verdana;
  z-index: 2;
  margin-top: -45px;
  margin-left: -1300px;

  :hover {
    color: #d5011d;
  }
`;
