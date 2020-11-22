import React, { useContext } from "react";
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

  let filteredData;

  //FILTER FUNCTION
  const filterFunction = () => {
    hotelData.map((item) => {
      /*
      [1]
      First, it is neccessary to assign the item's date according to
      the context. The Today variable in data.js isn't the same date
      that's in the context. 
      */
      console.log("HOTEL:" + item.name);
      console.log(`DATE FROM FILTERS: ${filters.date1}`);
      console.log(`DATE FROM ITEM: ${moment(item.availabilityFrom)}`);
      let difference = moment(
        filters.date1.diff(moment(item.availabilityFrom))
      );
      console.log("DIFFERENCE: " + difference);
      console.log("...........................");
    });
  };

  return (
    <CardContainerElement onClick={filterFunction}>
      {hotelData.map((item) => {
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
