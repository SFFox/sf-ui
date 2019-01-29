import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


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
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function Chips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>

        <Chip label="Basic Chip" className={classes.chip} />
        <Chip
          avatar={<Avatar>MB</Avatar>}
          label="Clickable Chip"
          onClick={handleClick}
          className={classes.chip}
        />
        <Chip
          avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
          label="Deletable Chip"
          onDelete={handleDelete}
          className={classes.chip}
        />
        <Chip
          avatar={
            <Avatar>
              <FaceIcon />
            </Avatar>
          }
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
          className={classes.chip}
        />
        <Chip
          icon={<FaceIcon />}
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
          className={classes.chip}
        />
        <Chip
          label="Custom delete icon Chip"
          onClick={handleClick}
          onDelete={handleDelete}
          className={classes.chip}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Clickable Link Chip"
          className={classes.chip}
          component="a"
          href="#chip"
          clickable
        />
        <Chip
          avatar={<Avatar>MB</Avatar>}
          label="Primary Clickable Chip"
          clickable
          className={classes.chip}
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary Clickable Chip"
          clickable
          className={classes.chip}
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Deletable Primary Chip"
          onDelete={handleDelete}
          className={classes.chip}
          color="primary"
        />
        <Chip
          avatar={
            <Avatar>
              <FaceIcon />
            </Avatar>
          }
          label="Deletable Secondary Chip"
          onDelete={handleDelete}
          className={classes.chip}
          color="secondary"
        />
        <Chip
          icon={<FaceIcon />}
          label="Deletable Secondary Chip"
          onDelete={handleDelete}
          className={classes.chip}
          color="secondary"
        />
      </MuiThemeProvider>

    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);