import styled from 'styled-components';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
`;

const H1 = styled.h1`
  color: #43cea2;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 25px;
`;

function Header() {
  return (
    <StyledHeader>
      <H1>
        <Link to="/">BookNest</Link>
      </H1>
      <Nav />
    </StyledHeader>
  );
}

export default Header;
