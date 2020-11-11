import React from "react";
import styled from "styled-components";
import variables from "../assets/globalStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faGlobe,
  faDollarSign,
  faBed
} from "@fortawesome/free-solid-svg-icons";

const FilterElement = styled.div`
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

    &:active {
      outline: none;
      border: none;
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

function Filters() {
  return (
    <FilterElement>
      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignInAlt} color={variables.gray} />
        <input type="date" />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignOutAlt} color={variables.gray} />
        <input type="date" />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faGlobe} color={variables.gray} />
        <select>
          <option>Hardcodeado</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faDollarSign} color={variables.gray} />
        <select>
          <option>Hardcodeado</option>
        </select>
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faBed} color={variables.gray} />
        <select>
          <option>Hardcodeado</option>
        </select>
      </IndividualFilterElement>
    </FilterElement>
  );
}

export default Filters;
