import React, { useState, useContext } from "react";
import { ListContext } from "./ListContext";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import variables from "../assets/globalStyles";
import "animate.css/animate.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faGlobe,
  faDollarSign,
  faBed
} from "@fortawesome/free-solid-svg-icons";

/*------------------------------------------------------------------*/
//STYLED SETUP
/*------------------------------------------------------------------*/

const FilterElement = styled.div`
  position: relative;
  width: 100%;
  background-color: ${variables.secondaryColor};
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem 0;

  @media screen and (max-width: ${variables.breakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const IndividualFilterElement = styled.div`
  background-color: white;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 1.5rem;
  padding: 0.25rem;
  border-radius: 2.5px;
  input,
  select {
    width: 150px;
    border: none;
    margin-left: 0.5rem;
    color: ${variables.gray};
    background-color: white;

    ::-webkit-calendar-picker-indicator {
      opacity: 25%;
    }

    &:focus {
      outline: none;
    }
  }

  option {
    font-size: 1.025rem;
  }

  @media screen and (max-width: ${variables.breakpoint}) {
    margin: 0.25rem;
    width: 90%;
    input,
    select {
      width: 100%;
    }
  }
`;

const ResetButton = styled.button`
  position: absolute;
  top: 4.25rem;
  border: none;
  background-color: ${variables.secondaryColor};
  color: white;
  font-weight: 650;
  width: 5rem;
  height: 2rem;
  border-radius: 27px;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${variables.secondaryColor};
    border: 1pt inset ${variables.secondaryColor};
  }

  &:focus {
    outline: none;
  }

  &.hidden {
    display: none;
  }

  @media screen and (max-width: ${variables.breakpoint}) {
    top: 15rem;
  }
`;

/*------------------------------------------------------------------*/
//COMPONENT
/*------------------------------------------------------------------*/

function Filters() {
  /*STATE & CONTEXT SETUP*/
  const [filters, setFilters] = useContext(ListContext);

  const [buttonVisibility, setButtonVisibility] = useState("hidden");

  const defaultOptions = {
    countries: ["Argentina", "Brasil", "Chile", "Uruguay"],
    price: ["Cualquier precio", "$", "$$", "$$$", "$$$$"],
    rooms: ["Cualquier tamaño", "Pequeño", "Mediano", "Grande"]
  };

  /*FUNCTIONS*/

  //Reset Button
  const makeButtonVisible = () => {
    setButtonVisibility("animate__bounceIn");
  };

  const makeButtonInvisible = () => {
    setButtonVisibility("animate__bounceOut");
    setButtonVisibility("hidden");
  };

  const resetFilters = () => {};

  //Handle filters' changes

  //date filters
  const changeDateFilters = (event) => {
    const newFiltering = {
      ...filters,
      [event.target.name]: moment(event.target.value)
    };
    setFilters(newFiltering);
    console.log(filters);
  };

  //countries' filter
  const changeSelectFilter = (event) => {
    if (!event.target.value.includes("Cualquier")) {
      const newFiltering = {
        ...filters,
        [event.target.name]: [event.target.value]
      };
      setFilters(newFiltering);
    } else {
      const newFiltering = {
        ...filters,
        [event.target.name]: defaultOptions[event.target.name]
      };
      setFilters(newFiltering);
    }
  };

  /*JSX*/
  return (
    <FilterElement>
      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignInAlt} color={variables.gray} />
        <input name="date1" type="date" onChange={changeDateFilters} />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignOutAlt} color={variables.gray} />
        <input name="date2" type="date" onChange={makeButtonVisible} />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faGlobe} color={variables.gray} />
        <select name="countries" onChange={changeSelectFilter}>
          <option>Cualquier país</option>
          <option>Argentina</option>
          <option>Brasil</option>
          <option>Chile</option>
          <option>Uruguay</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faDollarSign} color={variables.gray} />
        <select onChange={makeButtonVisible}>
          {filters.price.map((option) => {
            return <option key={uuidv4()}>{option}</option>;
          })}
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faBed} color={variables.gray} />
        <select onChange={makeButtonVisible}>
          {filters.rooms.map((option) => {
            return <option key={uuidv4()}>{option}</option>;
          })}
        </select>
      </IndividualFilterElement>
      <ResetButton className={buttonVisibility}>RESET</ResetButton>
    </FilterElement>
  );
}

/*------------------------------------------------------------------*/
//EXPORT
/*------------------------------------------------------------------*/

export default Filters;
