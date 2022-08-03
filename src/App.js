import './App.css';
import React from 'react';
import Main from './components/Main';
import { store } from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
