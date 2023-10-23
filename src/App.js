import { Toaster } from 'react-hot-toast';
import MessageHome from './pages/MessageHome';
import { ThemeProvider, createTheme, styled } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#4AA571',
    },
    tertiary: {
      main: '#323232',
      light: '#4A4A68',
    },
    danger: {
      main: '#E65E69',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    button: {
      fontSize: '0.7rem',
      textTransform: 'capitalize',
    },
    fontSize: 14,
    fontFamily: ['Montserrat', 'Rubik', 'Open Sans'].join(','),
    h1: {
      fontFamily: 'Rubik',
      fontSize: '32px',
      fontWeight: 700,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: 600,
    },
    body: {
      fontFamily: 'Rubik',
      fontSize: '16px',
      fontWeight: 600,
    },
    subtitle: {
      fontFamily: 'Montserrat',
      fontSize: '12px',
      fontWeight: 400,
    },
    label: {
      fontFamily: 'Montserrat',
      fontSize: '13px',
      fontWeight: 600,
    },
  },
});

const AppContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    padding: '0 16px',
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <MessageHome />
      </AppContainer>
      <Toaster
        position="top-center"
        containerStyle={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          fontWeight: 600,
        }}
      />
    </ThemeProvider>
  );
}

export default App;
