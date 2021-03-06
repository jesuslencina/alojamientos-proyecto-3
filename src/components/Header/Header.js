import React from 'react';
import styled from 'styled-components';
import variables from '../../assets/globalStyles';
import FilterString from './FilterString';

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
  return (
    <HeaderElement>
      <h1>
        <span style={{ color: '#2773B8' }}>di</span>
        <span style={{ color: '#E37A1F' }}>va</span>
        <span style={{ color: '#C4482F' }}>go</span>
      </h1>
      <FilterString />
    </HeaderElement>
  );
}

export default Header;
