import React, { useState, createContext } from "react";

export const ListContext = createContext();

export function ListProvider(props) {
  const [filters, setFilters] = useState({
    date1: null,
    date2: null,
    countries: ["Argentina", "Brasil", "Chile", "Uruguay"],
    prices: ["$", "$$", "$$$", "$$$$"],
    rooms: ["Pequeño", "Mediano", "Grande"],
    defaultOptions: {
      date1: null,
      date2: null,
      countries: ["Argentina", "Brasil", "Chile", "Uruguay"],
      prices: ["$", "$$", "$$$", "$$$$"],
      rooms: ["Pequeño", "Mediano", "Grande"]
    }
  });

  return (
    <ListContext.Provider value={[filters, setFilters]}>
      {props.children}
    </ListContext.Provider>
  );
}
