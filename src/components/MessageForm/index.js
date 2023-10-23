import React, { useRef } from 'react';
import {
  MessageFormWrapper,
  MessageInput,
} from './StyledComponents/MessageInput';
import { Button, styled } from '@mui/material';
import MessageService from '../../services/messageService';
import { useMessage } from '../../context/MessageContext';
import toast from 'react-hot-toast';

const MessageForm = () => {
  const message = useRef('');

  const { postMessage } = useMessage();

  const validateMessage = () => {
    if (message.current.value === '') {
      toast.error('Message cannot be empty');
      return false;
    } else {
      return true;
    }
  };

  const handlePostMessage = async () => {
    if (!validateMessage()) {
      return;
    }
    try {
      const response = await MessageService.postMessage({
        text: message.current.value,
      });
      const messageData = response?.data;
      message.current.value = '';
      toast.success('Message Added');
      postMessage(messageData);
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <MessageFormWrapper>
      <MessageInput ref={message} placeholder="Type your message here..." />
      <Button variant="contained" onClick={handlePostMessage}>
        Post
      </Button>
    </MessageFormWrapper>
  );
};

export default MessageForm;
