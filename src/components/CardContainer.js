import React from "react";
import styled from "styled-components";
import hotelData from "../assets/scripts/data";
import Card from "./Card";

const CardContainerElement = styled.section`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 4rem 2rem;
`;

function CardContainer() {
  return (
    <CardContainerElement>
      {hotelData.map((item) => {
        return (
          <Card
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
