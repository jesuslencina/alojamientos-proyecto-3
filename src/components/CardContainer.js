import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import hotelData from "../assets/scripts/data";
import Card from "./Card";
import variables from "../assets/globalStyles";
import "animate.css/animate.css";

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

function CardContainer() {
  return (
    <CardContainerElement>
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

export default CardContainer;
