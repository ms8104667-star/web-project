import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 100%;
  padding: 20px 30px;
  font-family: 'Courier New', Courier, monospace;
  ul {
    display: flex;
    gap: 10px;
    height: 100%;
    align-items: center;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Registration</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
