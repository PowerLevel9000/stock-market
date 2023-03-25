import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').reverse()[0];
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <NavWrapper>
      <div>
        <button title="Move Back" type="button" onClick={handleBackClick}>
          <i className="fa-solid fa-angle-left" />
        </button>
        <span title="Current Page">{!currentPath ? 'Home' : currentPath}</span>
      </div>
      <div>
        <i title="Search" className="fa-solid fa-magnifying-glass" />
        <i title="Mike Search" className="fa-solid fa-microphone" />
        <i title="Settings" className="fa-solid fa-gear" />
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.1rem .5rem;
  align-items: center;
  background-color: var(--darkSub);
  color: white;
  positon: absolute;
  height: 5vh;
  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 2rem;
    align-items: center;
    i {
      cursor: pointer;
    }
  }
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding: .5rem 1rem;
  }
`;

export default NavigationButton;
