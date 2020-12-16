import React, { useContext } from 'react';
import styled from 'styled-components';
import variables from '../../assets/globalStyles';
import { ListContext } from '../ListContext';

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

function ResetBtn(props) {
  const [filters, setFilters] = useContext(ListContext);

  /*FUNCTIONS*/

  const resetFilters = () => {
    const selectInputs = document.querySelectorAll('select');
    for (let index = 0; index < selectInputs.length; index++) {
      selectInputs[index].selectedIndex = 0;
    }
    const newFiltering = {
      ...filters,
      date1: filters.defaultOptions.date1,
      date2: filters.defaultOptions.date2,
      countries: filters.defaultOptions.countries,
      prices: filters.defaultOptions.prices,
      rooms: filters.defaultOptions.rooms,
    };
    setFilters(newFiltering);
    props.makeButtonInvisible();
  };

  return (
    <ResetButton className={props.visibility} onClick={resetFilters}>
      RESET
    </ResetButton>
  );
}

export default ResetBtn;
