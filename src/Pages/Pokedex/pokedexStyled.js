import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #dc3037;
  width: 100%;
  min-height:  100vh;
  height: 100%;
  flex-direction: column;

  z-index: 1;
/*   

 
  h2 {
    display: grid;
    padding: 40px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin: 0 0 30px 0;
    text-align: center;
  } */
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
  margin-left: 30px;
  

  :hover {
    color: #d5011d;
  }
`;
export const ContainerMap = styled.div`
  width: 98vw;
  display: flex;
  flex-wrap: wrap;
  margin-top:  -40px;
  padding-bottom: 30px;
`;

export const RemoveButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 116px;
height: 28px;
z-index: 2;
background: #ffffff;
border-radius: 8px;
border: none;
font-size: 15px;
line-height: 24px;
font-family: Verdana;
font-weight: bold;
-webkit-transition: box-shadow 300 ease-in-out, color 300ms ease-in-out;
transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

:hover {
background: #d5011d;
color: #fff;
font-weight: bold;
font-size: 17px;

box-shadow: 0 0 40px 40px #d5011d inset;
}

`;


export const HeaderPokedex = styled.img`
  display: flex;
  justify-content: end;
  /* align-items: center; */
  /* padding-bottom: 30px; */
  margin-left: 575px;
  margin-top: -70px;
  z-index: 1;
`;