import React, { useContext, useEffect } from "react";
import { ListContext } from "./ListContext";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import hotelData from "../assets/scripts/data";
import Card from "./Card";
import variables from "../assets/globalStyles";
import "animate.css/animate.css";

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
          case "$":
            convertedPrice = 1;
            break;

          case "$$":
            convertedPrice = 2;
            break;

          case "$$$":
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
      if (filters.rooms.length === 1) {
        switch (filters.rooms[0]) {
          case "Pequeño":
            convertedRoomsStandard = 10;
            break;

          case "Mediano":
            convertedRoomsStandard = 20;
            break;

          default:
            convertedRoomsStandard = 100;
            break;
        }
      } else {
        convertedRoomsStandard = 100;
      }

      /*
      [2]
     We'll see whether the user has selected BOTH date filters or not.
     For this, we'll compare the CONTEXT to its same DEFAULT VALUES
      */
      let filterByDate = true; //If the validation below is FALSE, this will remain unchanged.
      if (filters.date1.isSame(filters.defaultOptions.date1)) {
        //If TRUE, it means the FIRST DATE was NOT changed.
        if (filters.date2.isSame(filters.defaultOptions.date2)) {
          //If TRUE, it means that BOTH DATES were NOT changed.
          //If this is the case, ANY HOTEL SHOULD BE FILTERED BY DATE.
          filterByDate = false;
        }
      }

      /*
      [3]
      Now, we are going to COMPARE and VALIDATE whether the selected hotel matches
      the user's criteria. This will result in a HUGE if.
      */

      //1st validation: COUNTRY.
      if (filters.countries.includes(item.country)) {
        //If TRUE, the ITEM's country matches the FILTER.
        //2nd validation: PRICE

        if (convertedPrice >= item.price) {
          //If TRUE, the ITEM's price is EQUALS or LOWER than the FILTER's price.
          //3rd validation: SIZE (rooms)

          if (convertedRoomsStandard >= item.rooms) {
            //If TRUE, the ITEM's amount of rooms is EQUALS or LOWER than the FILTER
            //4th validation: DATE

            if (filterByDate) {
              if (
                filters.date1.isBetween(
                  moment(item.availabilityFrom),
                  moment(item.availabilityTo)
                )
              ) {
                //If this is TRUE, the FIRST DATE is bewteen the range.
                //Now we must check for the SECOND DATE.
                if (
                  filters.date2.isBetween(
                    moment(item.availabilityFrom),
                    moment(item.availabilityTo)
                  )
                ) {
                  //If this is TRUE, it matches. So we're pushing:
                  filteredArray.push(item);
                }
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
      {console.log(filteredData)}
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
          />
        );
      })}
    </CardContainerElement>
  );
}

/*------------------------------------------------------------------*/
//EXPORT
/*------------------------------------------------------------------*/

export default CardContainer;
