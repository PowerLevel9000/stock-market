import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavigationButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <NavWrapper>
      <button type="button" onClick={handleBackClick}>
        <i className="fa-solid fa-angle-left" />
      </button>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background-color: var(--darkSub);
  color: white;
  positon: absolute;
  height: 5vh;
  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
  }
  z-index: 2;
`;

export default NavigationButton;
