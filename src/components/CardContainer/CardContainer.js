import React, { useContext, useEffect } from 'react';
import { ListContext } from '../ListContext';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import hotelData from '../../assets/scripts/data';
import Card from '../Card/Card';
import variables from '../../assets/globalStyles';
import 'animate.css/animate.css';

/*------------------------------------------------------------------*/
//STYLED SETUP
/*------------------------------------------------------------------*/

const CardContainerElement = styled.section`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 4rem 2rem;

  @media screen and (max-width: ${variables.breakpoint}) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
  }
`;

/*------------------------------------------------------------------*/
//COMPONENT
/*------------------------------------------------------------------*/

function CardContainer() {
  const filters = useContext(ListContext)[0];
  //FILTER FUNCTION
  const filterFunction = () => {
    let filteredArray = [];
    hotelData.map((item) => {
      /*
      [1]
      First, it is neccessary to CONVERT the filters to match the data
      format of the item, and vice versa.
      */

      //Price: From "$" symbols to number
      let convertedPrice;

      if (filters.prices.length === 1) {
        switch (filters.prices[0]) {
          case '$':
            convertedPrice = 1;
            break;

          case '$$':
            convertedPrice = 2;
            break;

          case '$$$':
            convertedPrice = 3;
            break;

          default:
            convertedPrice = 4;
            break;
        }
      } else {
        convertedPrice = 4;
      }

      //Rooms: Quantity to max number that tells whether it's small, medium or big sized
      let convertedRoomsStandard;
      let convertedRoomsOffset = 10;
      if (filters.rooms.length === 1) {
        switch (filters.rooms[0]) {
          case 'Pequeño':
            convertedRoomsStandard = 10;
            break;

          case 'Mediano':
            convertedRoomsStandard = 20;
            break;

          default:
            convertedRoomsStandard = 50;
            convertedRoomsOffset = 30;
            break;
        }
      } else {
        convertedRoomsStandard = 50;
        convertedRoomsOffset = 50;
      }

      /*
      [2]
     We'll see whether the user has selected BOTH date filters or not.
     For this, we'll compare the CONTEXT to its same DEFAULT VALUES
      */
      let filterByDate = true; //If the validation below is FALSE, this will remain unchanged.
      if (filters.date1 === null || filters.date2 === null) {
        filterByDate = false;
      }

      /*
      [3]
      Now, we are going to COMPARE and VALIDATE whether the selected hotel matches
      the user's criteria. This will result in a HUGE if.
      */

      //1st validation: COUNTRY.
      if (Object.values(filters.countries).includes(item.country)) {
        //If TRUE, the ITEM's country matches the FILTER.
        //2nd validation: PRICE

        if (convertedPrice >= item.price) {
          //If TRUE, the ITEM's price is EQUALS or LOWER than the FILTER's price.
          //3rd validation: SIZE (rooms)

          if (
            item.rooms < convertedRoomsStandard &&
            item.rooms >= convertedRoomsStandard - convertedRoomsOffset
          ) {
            //4th validation: DATE

            if (filterByDate) {
              if (
                filters.date1.format('YYYY-MM-DD') >=
                  moment(item.availabilityFrom).format('YYYY-MM-DD') &&
                filters.date2.format('YYYY-MM-DD') <=
                  moment(item.availabilityTo).format('YYYY-MM-DD')
              ) {
                filteredArray.push(item);
              }
            } else {
              //If not filtered by date, we're pushing:
              filteredArray.push(item);
            }
          }
        }
      }
    });

    return filteredArray;
  };

  let filteredData = filterFunction();

  useEffect(() => {
    filterFunction();
  });

  return (
    <CardContainerElement>
      {filteredData.map((item) => {
        return (
          <Card
            className="animate__fadeInDown"
            key={uuidv4()}
            name={item.name}
            desc={item.description}
            img={item.photo}
            location={item.city}
            country={item.country}
            rooms={item.rooms}
            price={item.price}
            availabilityFrom={item.availabilityFrom}
            availabilityTo={item.availabilityTo}
          />
        );
      })}
      {filteredData.length === 0 ? <h2>Sin resultados :(</h2> : ''}
    </CardContainerElement>
  );
}

/*------------------------------------------------------------------*/
//EXPORT
/*------------------------------------------------------------------*/

export default CardContainer;
