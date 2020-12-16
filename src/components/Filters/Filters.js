import React, { useState, useContext } from 'react';
import { ListContext } from '../ListContext';
import moment from 'moment';

import styled from 'styled-components';
import variables from '../../assets/globalStyles';
import 'animate.css/animate.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faSignOutAlt,
  faGlobe,
  faDollarSign,
  faBed,
} from '@fortawesome/free-solid-svg-icons';

import ResetBtn from './ResetBtn';
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

/*------------------------------------------------------------------*/
//COMPONENT
/*------------------------------------------------------------------*/

function Filters() {
  /*STATE & CONTEXT SETUP*/
  const [filters, setFilters] = useContext(ListContext);

  //RESET BUTTON
  const [buttonVisibility, setButtonVisibility] = useState('hidden');

  //FUNCTIONS
  const makeButtonVisible = () => {
    setButtonVisibility('animate__bounceIn');
  };

  const makeButtonInvisible = () => {
    setButtonVisibility('animate__bounceOut');
    setTimeout(() => {
      setButtonVisibility('hidden');
    }, 700);
  };

  //Handle filters' changes
  //date filters
  const changeDateFilters = (event) => {
    const newDate = event.target.value;
    if (
      (event.target.name === 'date1' &&
        moment(newDate).isBefore(moment().subtract(1, 'd'))) ||
      (event.target.name === 'date2' &&
        moment(newDate).isBefore(filters.date1)) ||
      (event.target.name === 'date1' && moment(newDate).isAfter(filters.date2))
    ) {
      alert('Por favor, ingresá fechas de entrada y de salida válidas');
    } else {
      const newFiltering = {
        ...filters,
        [event.target.name]: moment(newDate),
      };

      makeButtonVisible();
      setFilters(newFiltering);
    }
  };

  //select filters
  const changeSelectFilter = (event) => {
    if (!event.target.value.includes('Cualquier')) {
      const newFiltering = {
        ...filters,
        [event.target.name]: [event.target.value],
      };
      setFilters(newFiltering);
      makeButtonVisible();
    } else {
      const newFiltering = {
        ...filters,
        [event.target.name]: filters.defaultOptions[event.target.name],
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
          value={moment(filters.date1).format('YYYY-MM-DD')}
          onChange={changeDateFilters}
        />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faSignOutAlt} color={variables.gray} />
        <input
          name="date2"
          type="date"
          value={moment(filters.date2).format('YYYY-MM-DD')}
          onChange={changeDateFilters}
        />
      </IndividualFilterElement>

      <IndividualFilterElement>
        <FontAwesomeIcon icon={faGlobe} color={variables.gray} />
        <select
          name="countries"
          onChange={changeSelectFilter}
          //value={filters.countries}
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
          //value={filters.prices}
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
          //value={filters.rooms}
        >
          <option>Cualquier tamaño</option>
          <option>Pequeño</option>
          <option>Mediano</option>
          <option>Grande</option>
        </select>
      </IndividualFilterElement>
      <ResetBtn
        visibility={buttonVisibility}
        makeButtonInvisible={makeButtonInvisible}
      />
    </FilterElement>
  );
}

/*------------------------------------------------------------------*/
//EXPORT
/*------------------------------------------------------------------*/

export default Filters;
