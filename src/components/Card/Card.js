import React from 'react';
import styled from 'styled-components';
import variables from '../../assets/globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faMapMarker,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.css';
import moment from 'moment';
import PriceTag from './PriceTag';

const CardElement = styled.article`
  width: 30%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 0.5pt solid ${variables.grayDarker};
  border-radius: 5px;
  background-color: white;
  img {
    width: 100%;
  }

  h2 {
    margin: 1rem;
  }

  .desc {
    margin: 1rem;
  }

  div {
    background-color: ${variables.grayLighter};
    width: fit-content;
    height: fit-content;
    display: flex;
    border-radius: 5px;
    margin: 0.25rem;

    &.location {
      margin-top: auto;
    }

    span {
      border-radius: 5px 0 0 5px;
      width: 2.5rem;
      background-color: ${variables.secondaryColor};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      margin: 0.5rem;
    }
  }

  button {
    width: 100%;
    border: none;
    background-color: ${variables.mainColor};
    color: white;
    font-weight: 600;
    height: 2.5rem;
    top: auto;

    &:hover {
      cursor: pointer;
      background-color: white;
      color: ${variables.mainColor};
      border: 1pt inset ${variables.mainColor};
    }

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: ${variables.breakpoint}) {
    width: 80%;
  }
`;

function Card(props) {
  return (
    <CardElement>
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <p className="desc">{props.desc}</p>
      <div className="location">
        <span>
          <FontAwesomeIcon icon={faMapMarker} color="white" />
        </span>
        <p>
          {props.location}, {props.country}
        </p>
      </div>
      <div className="rooms">
        <span>
          <FontAwesomeIcon icon={faBed} color="white" />
        </span>
        <p>{props.rooms} Habitaciones</p>
      </div>
      <div className="price">
        <PriceTag price={props.price} />
        <p>Precio</p>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faCalendar} color="white" />
        </span>
        <p>
          {moment(props.availabilityFrom).format('DD-MM-YYYY')} al{' '}
          {moment(props.availabilityTo).format('DD-MM-YYYY')}
        </p>
      </div>
      <button>Reservar</button>
    </CardElement>
  );
}

export default Card;
