import { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PanelPage from './pages/PanelPage';
import CompPage from './pages/CompPage';
import RentalsPage from './pages/RentalsPage';
import NotFound from './pages/NotFound';
import Alert from './components/ui/Alert';
import { useSelector } from 'react-redux';

function App() {
  const { alert } = useSelector((state) => state.alert);

  // Alert is just rendered here, but to show it, the dispatch function setAlert has to be used
  return (
    <Fragment>
      {alert && <Alert />}
      <Routes>
        <Route path='/' element={<Navigate replace to='/principal' />} />
        <Route path='/principal' element={<MainPage />} />
        <Route path='/panel' element={<PanelPage />} />
        <Route path='/computadoras' element={<CompPage />} />
        <Route path='/rentas' element={<RentalsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
