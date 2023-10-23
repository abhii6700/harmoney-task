import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react';

const DeleteModal = ({
  open,
  handleClose,
  handleDeleteAll,
  deleteAllLoading,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'Delete Messages'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete all messages?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          loadingPosition="start"
          onClick={handleDeleteAll}
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          loading={deleteAllLoading}
        >
          Delete All
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
