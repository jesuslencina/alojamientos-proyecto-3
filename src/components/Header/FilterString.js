import React, { useContext } from 'react';
import { ListContext } from '../ListContext';
import moment from 'moment';

import 'moment/locale/es';
moment.updateLocale('es');

function FilterString() {
  const [filters] = useContext(ListContext);

  const countryText = () => {
    if (filters.countries.length === 1) {
      return 'en ' + filters.countries;
    }
  };

  const priceText = () => {
    if (filters.prices.length === 1) {
      let textualPrice;
      switch (filters.prices[0]) {
        case '$':
          textualPrice = 'económico';
          break;

        case '$$':
          textualPrice = 'regular';
          break;

        case '$$$':
          textualPrice = 'caro';
          break;

        case '$$$$':
          textualPrice = 'de lujo';
          break;

        default:
          textualPrice = 'económico';
          break;
      }
      return 'de precio máximo ' + textualPrice;
    }
  };

  const sizeText = () => {
    if (filters.rooms.length === 1) {
      return 'de tamaño ' + filters.rooms;
    }
  };

  const dateText = () => {
    if (filters.date1 !== null && filters.date2 !== null) {
      return `desde el ${moment(filters.date1).format('dddd D [de] MMMM')}  
        hasta el ${moment(filters.date2).format('dddd D [de] MMMM')}  `;
    }
  };

  return (
    <p>
      Buscando hoteles {dateText()}
      {countryText()} {priceText()} {sizeText()}
    </p>
  );
}

export default FilterString;
