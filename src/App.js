import React from "react";
import RouterPage from "./Routes/RouterPage";
import { createGlobalStyle } from "styled-components";
import GlobalState from "./global/GlobalState";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  `;

const App = () => {
  return (
    <div>
      <GlobalState>
        <GlobalStyle />
        <RouterPage />
      </GlobalState>
    </div>
  );
};

export default App;
