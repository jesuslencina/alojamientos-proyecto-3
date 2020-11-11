import React, { useState } from "react";
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

function Filters() {
  const [buttonVisibility, setButtonVisibility] = useState("hidden");

  const makeButtonVisible = () => {
    setButtonVisibility("animate__bounceIn");
  };

  return (
    <FilterElement>
      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignInAlt} color={variables.gray} />
        <input type="date" onChange={makeButtonVisible} />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignOutAlt} color={variables.gray} />
        <input type="date" onChange={makeButtonVisible} />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faGlobe} color={variables.gray} />
        <select onChange={makeButtonVisible}>
          <option>Hardcodeado</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faDollarSign} color={variables.gray} />
        <select onChange={makeButtonVisible}>
          <option>Hardcodeado</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faBed} color={variables.gray} />
        <select onChange={makeButtonVisible}>
          <option>Hardcodeado</option>
        </select>
      </IndividualFilterElement>
      <ResetButton className={buttonVisibility}>RESET</ResetButton>
    </FilterElement>
  );
}

export default Filters;
