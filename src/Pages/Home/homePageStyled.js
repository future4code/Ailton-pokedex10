import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #012231;
  display: grid;
  /* grid-template-columns:  repeat(  3, 400px );
  grid-template-rows: 113px repeat(  8, 1fr ); */
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-bottom: 30px;

 
  h2 {
    display: grid;
    grid-column: 1/4;
    padding: 40px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin: 0 0 30px 0;
  }
`;
