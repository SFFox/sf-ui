import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './steplabel.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#17a8a2',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main
      main: '#5e4cac',
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


const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </MuiThemeProvider>

        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <MuiThemeProvider theme={theme}>

                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                    >
                      Back
                </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </MuiThemeProvider>

                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);