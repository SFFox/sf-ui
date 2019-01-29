import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
});


class SwitchLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
            }
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
        </FormGroup>
      </MuiThemeProvider>

    );
  }
}

export default SwitchLabels;