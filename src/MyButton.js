import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './MyButton.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#5e4cac',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main
      main: '#17a8a2',
      // dark: will be calculated from palette.secondary.main
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
    // error: will use the default color
  },

  overrides: {
    Button: { // Name of the component / style sheet
      text: { // Name of the rule
        color: 'white', // Some CSS should make button text color white
      },
    },
  },

      typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          'open-sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },

      label: {
        textTransform: 'capitalize', //Should make button text to not all caps
      },
    });




class MyButton extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Button classes={{ label: 'purple-button' }}variant="contained" color="primary">Primary Button</Button>
          <Button classes={{ label: 'green-button' }} variant="contained" color="secondary">Secondary Button</Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MyButton;
