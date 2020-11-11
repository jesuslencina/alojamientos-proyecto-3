import React from "react";
import styled from "styled-components";
import hotelData from "../assets/scripts/data";
import Card from "./Card";
import variables from "../assets/globalStyles";

const CardContainerElement = styled.section`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 4rem 2rem;

  @media screen and (max-width: ${variables.breakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

function CardContainer() {
  return (
    <CardContainerElement>
      {hotelData.map((item) => {
        return (
          <Card
            //CUIDADO CON LA KEY
            key={item.description}
            name={item.name}
            desc={item.description}
            img={item.photo}
            location={item.city}
            country={item.country}
            rooms={item.rooms}
          />
        );
      })}
    </CardContainerElement>
  );
}

export default CardContainer;
