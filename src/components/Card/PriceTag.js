import React from 'react';
import styled from 'styled-components';
import variables from '../../assets/globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const PriceTagElement = styled.span`
  border-radius: 5px 0 0 5px;
  width: 2.5rem;
  background-color: ${variables.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PriceTag(props) {
  return (
    <PriceTagElement>
      <FontAwesomeIcon
        icon={faDollarSign}
        color="white"
        opacity={props.price > 0 ? '100%' : '50%'}
      />
      <FontAwesomeIcon
        icon={faDollarSign}
        color="white"
        opacity={props.price > 1 ? '100%' : '50%'}
      />
      <FontAwesomeIcon
        icon={faDollarSign}
        color="white"
        opacity={props.price > 2 ? '100%' : '50%'}
      />
      <FontAwesomeIcon
        icon={faDollarSign}
        color="white"
        opacity={props.price > 3 ? '100%' : '50%'}
      />
    </PriceTagElement>
  );
}

export default PriceTag;
