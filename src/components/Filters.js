import React, { useState, useContext } from "react";
import { ListContext } from "./ListContext";
import moment from "moment";

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

  /*FUNCTIONS*/

  //Reset Button
  const makeButtonVisible = () => {
    setButtonVisibility("animate__bounceIn");
  };

  const makeButtonInvisible = () => {
    setButtonVisibility("animate__bounceOut");
    setTimeout(() => {
      setButtonVisibility("hidden");
    }, 700);
  };

  const resetFilters = () => {
    const newFiltering = {
      ...filters,
      date1: filters.defaultOptions.date1,
      date2: filters.defaultOptions.date2,
      countries: filters.defaultOptions.countries,
      prices: filters.defaultOptions.prices,
      rooms: filters.defaultOptions.rooms
    };
    setFilters(newFiltering);
    makeButtonInvisible();
  };

  //Handle filters' changes

  //date filters
  const changeDateFilters = (event) => {
    const newDate = event.target.value;
    if (
      event.target.name === "date1" &&
      moment(newDate).isBefore(moment().subtract(1, "d"))
    ) {
      alert("Por favor, ingresá fechas de entrada y de salida válidas");
    } else {
      const newFiltering = {
        ...filters,
        [event.target.name]: moment(newDate)
      };
      setFilters(newFiltering);
      makeButtonVisible();
    }
  };

  //select filters
  const changeSelectFilter = (event) => {
    if (!event.target.value.includes("Cualquier")) {
      const newFiltering = {
        ...filters,
        [event.target.name]: [event.target.value]
      };
      setFilters(newFiltering);
      makeButtonVisible();
    } else {
      const newFiltering = {
        ...filters,
        [event.target.name]: filters.defaultOptions[event.target.name]
      };
      setFilters(newFiltering);
    }
  };

  /*JSX*/
  return (
    <FilterElement>
      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignInAlt} color={variables.gray} />
        <input
          name="date1"
          type="date"
          value={filters.date1}
          onChange={changeDateFilters}
        />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignOutAlt} color={variables.gray} />
        <input
          name="date2"
          type="date"
          value={filters.date2}
          onChange={changeDateFilters}
        />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faGlobe} color={variables.gray} />
        <select
          name="countries"
          onChange={changeSelectFilter}
          value={filters.countries}
        >
          <option>Cualquier país</option>
          <option>Argentina</option>
          <option>Brasil</option>
          <option>Chile</option>
          <option>Uruguay</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faDollarSign} color={variables.gray} />
        <select
          name="prices"
          onChange={changeSelectFilter}
          value={filters.prices}
        >
          <option>Cualquier precio</option>
          <option>$</option>
          <option>$$</option>
          <option>$$$</option>
          <option>$$$$</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faBed} color={variables.gray} />
        <select
          name="rooms"
          onChange={changeSelectFilter}
          value={filters.rooms}
        >
          <option>Cualquier tamaño</option>
          <option>Pequeño</option>
          <option>Mediano</option>
          <option>Grande</option>
        </select>
      </IndividualFilterElement>
      <ResetButton className={buttonVisibility} onClick={resetFilters}>
        RESET
      </ResetButton>
    </FilterElement>
  );
}

/*------------------------------------------------------------------*/
//EXPORT
/*------------------------------------------------------------------*/

export default Filters;
