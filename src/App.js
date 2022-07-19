import React from "react";
import RouterPage from "./Routes/RouterPage";
import Header from "./Header/Header"
import CardHomePage from './Pages/Home/CardHomePage'

const App = () => {
  return (
    <div>
      <RouterPage />
      <CardHomePage/>
    </div>
  );
}

export default App;
