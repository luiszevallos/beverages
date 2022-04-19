import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export default function NavBarVertical(props) {
  const { active, onClose } = props

  return (
    <Nav primary={active}>
      <Ul>
        <Li>
          <NavLink
            onClick={onClose}
            style={({ isActive }) => {
              return {
                display: "block",
                textDecoration: 'none',
                padding: "1rem 1rem",
                color: isActive ? "#2b2b2b" : "#8b8b8b",
              };
            }}
            to="/"
          >
            Bebidas
          </NavLink>
        </Li>
        <Li>
          <NavLink
            onClick={onClose}
            style={({ isActive }) => {
              return {
                display: "block",
                textDecoration: 'none',
                padding: "1rem 1rem",
                color: isActive ? "#2b2b2b" : "#8b8b8b",
              };
            }}
            to="/ingredients"
          >
            Ingredientes
          </NavLink>
        </Li>
      </Ul>
    </Nav>
  )
}

const Nav = styled.nav`
  box-shadow: 10px 5px 11px #d4d4d4;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px 0;
  @media (max-width: 750px) {
    display: ${props => props.primary ? 'flex' : 'none'};
    position: fixed;
    width: 220px;
    z-index: 10;
    bottom: 0;
    left: 0;
    top: 0;
  }
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`
