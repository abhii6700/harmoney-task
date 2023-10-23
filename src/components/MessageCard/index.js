import { IconButton, Stack, Typography, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import moment from 'moment';
import { useMessage } from '../../context/MessageContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageService from '../../services/messageService';
import toast from 'react-hot-toast';

const MessageCardWrapper = styled('div')(({ theme }) => ({
  borderRadius: '12px',
  backgroundColor: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;',
  width: '100%',
  marginBottom: '16px',
}));

const MessageCard = ({
  message = { id: 0, source: '', text: '', timestamp: new Date() },
}) => {
  const { deleteMessage } = useMessage();

  const handleDelete = async () => {
    try {
      const response = await MessageService.deletMessage(message?.id);
      toast.success('Message Deleted');
      deleteMessage(message);
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <MessageCardWrapper>
      <Stack
        padding={2}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} gap={1} alignItems={'center'}>
          <Stack direction={'column'} gap={1}>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <AccountCircleIcon color="primary" />
              <Typography variant="body" color={'tertiary.main'}>
                {message.source}
              </Typography>
              <Typography variant="subtitle" color={'tertiary.light'}>
                {moment(message.timestamp).format('ddd Do MMM - HH:mm A')}
              </Typography>
            </Stack>

            <Typography variant="label" color={'tertiary.light'}>
              {message.text}
            </Typography>
          </Stack>
        </Stack>

        <IconButton onClick={handleDelete} color="danger">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </MessageCardWrapper>
  );
};

export default React.memo(MessageCard);
