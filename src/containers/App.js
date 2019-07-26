import React from 'react';
import './css/App.css';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { store } from '../store';

const App = () => {
  return (
    <div className="app">
      <Sidebar contacts={ Object.values(store.getState().contacts) }/>
      <Main />
    </div>
  );
}

export default App;
