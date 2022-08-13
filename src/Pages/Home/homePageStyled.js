import styled from "styled-components";

export const Container = styled.div`
  background-color: #015e82;
  width: 100%;
  height: 100%;
  min-height: 95.5vh;
  flex-direction: column;
  padding-bottom: 30px;

  h2 {
    display: grid;
    padding: 20px;
    color: #eff6f9;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin: 0 0 25px 0;
  }

  @media screen and (max-width: 480px) {
padding-bottom:20px; 
  }
`;
