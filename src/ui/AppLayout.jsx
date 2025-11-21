import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr 50px;
`;

const StyledMain = styled.main`
  height: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <StyledMain>
        <Outlet />
      </StyledMain>

      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
