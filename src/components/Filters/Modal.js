import React from 'react';
import styled from 'styled-components';

const ModalElement = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(125, 125, 125, 0.51);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    padding: 3rem;
    border-radius: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.25rem;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: green;
      color: white;
      font-size: 1.25rem;
      font-weight: 700;
      border: none;
      border-radius: 17px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

function Modal(props) {
  return (
    <ModalElement>
      <div>
        <p>Por favor, ingresa un rango de fechas válido</p>
        <button onClick={props.makeModalInvisible}>Ok</button>
      </div>
    </ModalElement>
  );
}

export default Modal;
