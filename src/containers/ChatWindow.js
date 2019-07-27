import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import "./css/ChatWindow.css";
import MessageInput from "../components/MessageInput";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={ activeUser } />
      <Chats messages={ activeMsgs ? Object.values(activeMsgs) : [] }/>
      <MessageInput value={ typing } />
    </div>
  );
};

export default ChatWindow;