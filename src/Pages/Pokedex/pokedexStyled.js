import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #012231;
  display: grid;
  grid-template-columns: repeat(3, 460px);
  grid-template-rows: 113px repeat(8, 1fr);
  flex-direction: column;
  padding-bottom: 30px;

  h2 {
    display: grid;
    grid-row: 2/3;
    padding: 40px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
  }
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
  height: 30px;
  font-family: Verdana;
  z-index: 2;
  margin-top: -45px;
  margin-left: -430px;

  :hover {
    color: #d5011d;
  }
`;
export const Card = styled.div`
  background-color: #012231;
  grid-row: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
`;
