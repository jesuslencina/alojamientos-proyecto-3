import React, { useContext } from "react";
import { ListContext } from "./ListContext";
import moment from "moment";

import styled from "styled-components";
import variables from "../assets/globalStyles";

import "moment/locale/es";
moment.updateLocale("es");

const HeaderElement = styled.header`
  background-color: ${variables.mainColor};
  color: white;
  padding: 3rem 4rem;
  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    text-shadow: 1px 1px 0px white;
  }

  span {
    font-weight: 650;
  }

  @media screen and (max-width: ${variables.breakpoint}) {
    h1,
    p {
      text-align: center;
    }
  }
`;

function Header() {
  const [filters] = useContext(ListContext);

  const countryText = () => {
    if (filters.countries.length === 1) {
      return "en " + filters.countries;
    }
  };

  const priceText = () => {
    if (filters.prices.length === 1) {
      let textualPrice;
      switch (filters.prices[0]) {
        case "$":
          textualPrice = "económico";
          break;

        case "$$":
          textualPrice = "regular";
          break;

        case "$$$":
          textualPrice = "caro";
          break;

        case "$$$$":
          textualPrice = "de lujo";
          break;

        default:
          textualPrice = "económico";
          break;
      }
      return "de precio máximo " + textualPrice;
    }
  };

  const sizeText = () => {
    if (filters.rooms.length === 1) {
      return "de tamaño " + filters.rooms;
    }
  };

  const dateText = () => {
    if (filters.date1 !== undefined && filters.date2 !== undefined) {
      return `desde el ${moment(filters.date1).format("dddd D [de] MMMM")}  
      hasta el ${moment(filters.date2).format("dddd D [de] MMMM")}  `;
    }
  };

  return (
    <HeaderElement>
      <h1>
        <span style={{ color: "#2773B8" }}>di</span>
        <span style={{ color: "#E37A1F" }}>va</span>
        <span style={{ color: "#C4482F" }}>go</span>
      </h1>
      <p>
        Buscando hoteles {dateText()}
        {countryText()} {priceText()} {sizeText()}
      </p>
    </HeaderElement>
  );
}

export default Header;
