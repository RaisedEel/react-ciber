import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ClientsPage from './pages/ClientsPage';
import CompPage from './pages/CompPage';
import RentalsPage from './pages/RentalsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/principal' />} />
      <Route path='/principal' element={<MainPage />} />
      <Route path='/clientes' element={<ClientsPage />} />
      <Route path='/computadoras' element={<CompPage />} />
      <Route path='/rentas' element={<RentalsPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
