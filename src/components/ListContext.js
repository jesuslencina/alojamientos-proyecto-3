import React, { useState, createContext } from 'react';

export const ListContext = createContext();

export function ListProvider(props) {
  const [filters, setFilters] = useState({
    date1: null,
    date2: null,
    countries: {
      ARGENTINA: 'Argentina',
      BRASIL: 'Brasil',
      CHILE: 'Chile',
      URUGUAY: 'Uruguay',
    },
    prices: {
      CHEAP: '$',
      AVREAGE: '$$',
      PRICEY: '$$$',
      EXPENSIVE: '$$$$',
    },
    rooms: ['Pequeño', 'Mediano', 'Grande'],
    defaultOptions: {
      date1: null,
      date2: null,
      countries: {
        ARGENTINA: 'Argentina',
        BRASIL: 'Brasil',
        CHILE: 'Chile',
        URUGUAY: 'Uruguay',
      },
      prices: {
        CHEAP: '$',
        AVREAGE: '$$',
        PRICEY: '$$$',
        EXPENSIVE: '$$$$',
      },
      rooms: ['Pequeño', 'Mediano', 'Grande'],
    },
  });

  return (
    <ListContext.Provider value={[filters, setFilters]}>
      {props.children}
    </ListContext.Provider>
  );
}
