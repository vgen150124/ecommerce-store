import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3rem;
  padding-left: 4rem;

  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigation;