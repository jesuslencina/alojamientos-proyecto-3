import React, { useState, createContext } from "react";
import moment from "moment";

export const ListContext = createContext();

export function ListProvider(props) {
  const [filters, setFilters] = useState({
    date1: moment(),
    date2: moment().add(1, "w"),
    country: "any",
    price: "any",
    rooms: "any"
  });

  return (
    <ListContext.Provider value={filters}>
      {props.children}
    </ListContext.Provider>
  );
}
