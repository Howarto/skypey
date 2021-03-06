import React from 'react';
import './css/App.css';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import store from '../store';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={ Object.values(contacts) }/>
      <Main user={ user } activeUserId={ activeUserId }/>
    </div>
  );
}

export default App;
