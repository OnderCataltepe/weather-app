import { createTheme, ThemeProvider } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 0,
    sm: 575,
    md: 900,
    lg: 1200,
    xl: 1536
  }
};

const theme = createTheme({
  ...breakpoints,
  palette: {},

  typography: {
    h4: {
      fontSize: 14,
      fontWeight: 'bold',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 12
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: 9
      }
    },
    h5: {
      fontSize: 10,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 8
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: 7
      }
    },
    h6: {
      fontSize: 8,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 5
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: 5
      }
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 8,
          '&:last-child': {
            paddingBottom: 8
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '2px 0',
          textAlign: 'center',
          [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
            fontSize: 10
          },
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: 10
          }
        }
      }
    },
    '& .MuiTableCell-head': {
      styleOverrides: {
        fontWeight: 'bold'
      }
    }
  }
});
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
