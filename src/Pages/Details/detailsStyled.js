import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #012231;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;

  h2 {
    display: grid;
    padding: 40px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin: 0 0 30px 0;
    text-align: center;
  }
  @media screen and (max-width: 480px){

  }
`;
export const Card = styled.div`
margin-left: 100px;
margin-top: 280px;
`;
