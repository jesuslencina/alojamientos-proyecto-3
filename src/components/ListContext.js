import React, { useState, createContext } from "react";
import moment from "moment";

export const ListContext = createContext();

export function ListProvider(props) {
  const [filters, setFilters] = useState({
    date1: moment(),
    date2: moment().add(1, "w"),
    countries: ["Argentina", "Brasil", "Chile", "Uruguay"],
    price: ["$", "$$", "$$$", "$$$$"],
    rooms: ["Pequeño", "Mediano", "Grande"]
  });

  return (
    <ListContext.Provider value={[filters, setFilters]}>
      {props.children}
    </ListContext.Provider>
  );
}
