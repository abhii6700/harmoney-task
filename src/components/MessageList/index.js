import {
  Button,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
  styled,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useMessage } from '../../context/MessageContext';
import MessageService from '../../services/messageService';
import MessageCard from '../MessageCard';
import DeleteModal from '../DeleteModal';
import toast from 'react-hot-toast';

const MessagleListWrapper = styled('div')(({ theme }) => ({
  width: '100%',
}));

const MessageList = () => {
  const {
    setInitialMessages,
    messageList,
    toggleSort,
    sortByTime,
    deleteAllMessages,
  } = useMessage();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteAllLoading, setDeleteAllLoading] = useState(false);

  const fetchMessageList = async () => {
    try {
      const response = await MessageService.fetchMessages();
      const messageData = response?.data;
      setInitialMessages(messageData);
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    fetchMessageList();
  }, []);

  const deleteAllItems = (messageIds) => {
    setDeleteAllLoading(true);
    const deletePromises = messageIds?.map((id) => {
      return MessageService.deletMessage(id);
    });

    Promise.allSettled(deletePromises).then((results) => {
      const failedItems = results.filter(
        (result) => result.status === 'Not Found'
      );
      if (failedItems.length > 0) {
        toast.error(`Failed to delete ${failedItems.length} items.`);
      } else {
        deleteAllMessages();
        toast.success('All items deleted successfully!');
      }
      setDeleteAllLoading(false);
      handleDeleteModalClose();
    });
  };

  const handleDeleteAll = () => {
    const messageIdsToDelete = messageList.map((item) => {
      return item.id;
    });
    deleteAllItems(messageIdsToDelete);
  };

  const handleDeleteModalClose = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const getSortedList = (sortByTime) => {
    if (sortByTime) {
      return [...messageList].sort(
        (a, b) => moment(b.timestamp).valueOf() - moment(a.timestamp).valueOf()
      );
    } else {
      return messageList;
    }
  };

  const sortedList = useMemo(
    () => getSortedList(sortByTime),
    [messageList.length, sortByTime]
  );

  return (
    <MessagleListWrapper>
      {sortedList.length > 0 ? (
        <>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginBottom={2}
          >
            <Button
              variant="outlined"
              color="danger"
              onClick={() => setOpenDeleteModal(!openDeleteModal)}
            >
              Delete All
            </Button>
            <FormControlLabel
              control={<Switch onChange={toggleSort} />}
              label="Sort By Latest"
              labelPlacement="start"
            />
          </Stack>
          {sortedList?.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </>
      ) : (
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          marginY={10}
        >
          <Typography variant="label" color={'tertiary.light'}>
            No Messages yet
          </Typography>
        </Stack>
      )}

      <DeleteModal
        open={openDeleteModal}
        handleClose={handleDeleteModalClose}
        handleDeleteAll={handleDeleteAll}
        deleteAllLoading={deleteAllLoading}
      />
    </MessagleListWrapper>
  );
};

export default MessageList;
