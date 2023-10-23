import { Typography, styled } from '@mui/material';
import React from 'react';
import MessageForm from '../components/MessageForm';
import MessageList from '../components/MessageList';
import { MessageContextProvider } from '../context/MessageContext';

const MessageHomeWrapper = styled('div')(({ theme }) => ({
  padding: '48px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '28px',
  width: '100%',
}));

const MessageHome = () => {
  return (
    <MessageHomeWrapper>
      <Typography variant="h1" color={'tertiary.main'}>
        Message Board
      </Typography>
      <MessageContextProvider>
        <MessageForm />
        <MessageList />
      </MessageContextProvider>
    </MessageHomeWrapper>
  );
};

export default MessageHome;
