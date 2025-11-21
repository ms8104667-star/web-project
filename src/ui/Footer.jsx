import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: #43cea2;
  padding: 1rem 0;
  text-align: center;
  border-top: 2px solid #1f2a35;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} BookNest </p>
    </StyledFooter>
  );
}

export default Footer;
