import React from "react";
import { ListProvider } from "./components/ListContext";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import CardContainer from "./components/CardContainer/CardContainer";

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
