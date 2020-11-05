import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <CardContainer />
    </div>
  );
}

export default App;
