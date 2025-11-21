import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Main from './pages/Main';
import Login from './pages/Login';
import Registration from './pages/Registration';
import About from './pages/About';
import NotFound from './pages/NotFound';
import GlobalStyles from './ui/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
