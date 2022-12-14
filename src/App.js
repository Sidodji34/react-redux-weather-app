import './App.css';
import React from 'react';
import Main from './components/Main';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
};

export default App;