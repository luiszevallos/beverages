import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

import NavBarVertical from './NavBarVertical';

export default function Layout(props) {
  const [active, setActive] = useState(false);

  return (
    <Main>
      <Button onClick={() => setActive(!active)}>
        <MenuIcon sx={{ fontSize: 25, color: '#6b6b6b' }} />
      </Button>
      <NavBarVertical active={active} onClose={() => setActive(false)}/>
      <Outlet />
    </Main>
  )
}

const Main = styled.main`
  grid-template-columns: 230px 1fr;
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  grid-gap: 20px;
  height: 100vh;
  display: grid;
  width: 100%;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  position: fixed;
  display: none;
  left: 10px;
  top: 10px;
  border: 0;
  @media (max-width: 750px) {
    display: flex;
  }
`;