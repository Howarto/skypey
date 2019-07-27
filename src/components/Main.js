import React from 'react';
import './css/Main.css';
import ChatWindow from '../containers/ChatWindow';
import Empty from './Empty';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={ user } activeUserId={ activeUserId }/>
    }
    else {
      return <ChatWindow activeUserId={ activeUserId }/>
    }
  }
  return <main className="Main">{ renderMainContent() }</main>
}

export default Main