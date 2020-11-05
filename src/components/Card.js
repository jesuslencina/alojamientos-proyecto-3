import React from "react";
import styled from "styled-components";
import variables from "../assets/globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faBed,
  faMapPin
} from "@fortawesome/free-solid-svg-icons";

const CardElement = styled.article`
  width: 30%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  border: 0.5pt solid ${variables.gray};
  border-radius: 5px;
  img {
    width: 100%;
  }

  h2 {
    margin: 1rem;
  }

  p {
    margin: 1rem;
  }

  div {
    background-color: ${variables.grayLighter};
    width: fit-content;
    height: fit-content;
    display: flex;
    border-radius: 5px;
    margin: 0.25rem;
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
  }
`;

function Card(props) {
  return (
    <CardElement>
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <div>
        <span>
          <FontAwesomeIcon icon={faMapPin} color="white" />
        </span>
        <p>
          {props.location}, {props.country}
        </p>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faBed} color="white" />
        </span>
        <p>{props.rooms} Habitaciones</p>
      </div>
      <button>Reservar</button>
    </CardElement>
  );
}

export default Card;
