import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src='./images/logo.png' alt='LOGO' width={100} height={50}/>
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header
