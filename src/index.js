import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Layout from './components/layout/Layout';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
