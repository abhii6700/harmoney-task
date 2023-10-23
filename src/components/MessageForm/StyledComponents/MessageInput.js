import { styled } from '@mui/material';

export const MessageFormWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
}));

export const MessageInput = styled('input')(({ theme }) => ({
  padding: '8px',
  borderRadius: '8px',
  flexGrow: 1,
  border: 'none',
  fontFamily: 'Montserrat',
  fontWeight: 500,
  backgroundColor: '#ECF1F4',
  outline: 'none',
  fontSize: '16px',
}));
