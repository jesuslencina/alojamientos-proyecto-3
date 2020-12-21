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
    rooms: { SMALL: 'Pequeño', AVERAGE: 'Mediano', BIG: 'Grande' },
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
      rooms: { SMALL: 'Pequeño', AVERAGE: 'Mediano', BIG: 'Grande' },
    },
  });

  return (
    <ListContext.Provider value={[filters, setFilters]}>
      {props.children}
    </ListContext.Provider>
  );
}
