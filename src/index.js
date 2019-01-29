import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton.js';
import TextFields from './TextFields.js';
import Stepper from './Stepper.js';
import SimpleSelect from './SimpleSelect.js';
import RadioButtons from './RadioButtons.js';
import Checkboxes from './Checkboxes.js';
import SwitchLabels from './Switches.js';
import DatePicker from './DatePicker.js';
import SimpleCard from './SimpleCard.js';
import MediaCard from './MediaCard.js';
import AlertDialog from './AlertDialog.js';
import Chips from './Chips.js';
import MySnackbarContent from './Snackbars.js';
import TablePaginationActions from './Table.js';
//import theme from './theme.js';
//import MuiThemeProvider from '@material-ui/core/styles';
import PositionedTooltips from './Tooltips.js';



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
          </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            {/* <MuiThemeProvider theme={theme}> */}
            Buttons
            <MyButton />
            Text Fields
            <TextFields />
            Stepper - (Label text should be white)
            <Stepper />
            Drop Down Select
            <SimpleSelect />
            Radio Buttons
            <RadioButtons />
            Checkboxes
            <Checkboxes />
            Switches
            <SwitchLabels />
            Date Picker
            <DatePicker />
            Tooltips
            <PositionedTooltips />
            Simple Card
            <SimpleCard />
            Media Card
            <MediaCard />
            Pop Up Dialog
            <AlertDialog />
            Chips Stepper - (Label text should be white)
            <Chips />
            Notification Snackbars
            <MySnackbarContent />
            Tables
            <TablePaginationActions />
            {/* </MuiThemeProvider> */}

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#main"));

serviceWorker.unregister();
