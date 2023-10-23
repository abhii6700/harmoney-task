import React, { useContext, useReducer } from 'react';
import { reducer, initialState } from '../reducers/messageReducers';
import { ACTION_TYPES } from '../actions/messageAction';

export const MessageContext = React.createContext(initialState);

export const MessageContextProvider = ({ children }) => {
  const [messageState = {}, dispatch = () => null] = useReducer(
    reducer,
    initialState
  );

  const setInitialMessages = (messageList) => {
    dispatch({
      type: ACTION_TYPES.SET_INITIAL_MESSAGES,
      payload: { messageList },
    });
  };

  const postMessage = (message) => {
    dispatch({
      type: ACTION_TYPES.POST_MESSAGE,
      payload: message,
    });
  };

  const deleteMessage = (message) => {
    dispatch({
      type: ACTION_TYPES.DELETE_MESSAGE,
      payload: message,
    });
  };

  const deleteAllMessages = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_ALL_MESSAGES,
    });
  };

  const toggleSort = () => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_SORT,
    });
  };

  const value = {
    messageList: messageState.messageList,
    sortByTime: messageState.sortByTime,
    setInitialMessages,
    postMessage,
    deleteMessage,
    deleteAllMessages,
    toggleSort,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
