import React from "react";
import { ListProvider } from "./components/ListContext";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <ListProvider>
        <Header />
        <Filters />
        <CardContainer />
      </ListProvider>
    </div>
  );
}

export default App;
