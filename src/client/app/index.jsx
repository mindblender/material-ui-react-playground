import React from 'react';
import {render} from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
// import AwesomeComponent from './AwesomeComponent.jsx'
// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// const App = () => (
//   <MuiThemeProvider>
//     <AwesomeComponent />
//   </MuiThemeProvider>
// );
const App = () => (
    <Button raised color="primary" >
        Primary
    </Button>
);



// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );


render(<App/>, document.getElementById('app'));