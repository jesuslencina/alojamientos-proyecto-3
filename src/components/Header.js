import React from "react";
import styled from "styled-components";
import variables from "../assets/globalStyles";

const HeaderElement = styled.header`
  background-color: ${variables.mainColor};
  color: white;
  padding: 3rem 4rem;
  h1 {
    font-weight: 500;
    margin-bottom: 0.25rem;
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
      <h1>Hoteles</h1>
      <p>
        Desde el <span>harcodeado</span> hasta el <span>harcodeado</span>
      </p>
    </HeaderElement>
  );
}

export default Header;
