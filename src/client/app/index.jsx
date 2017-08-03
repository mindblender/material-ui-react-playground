import React from 'react';
import {render} from 'react-dom';
import Button from 'material-ui/Button';

const App = () => (
    <Button raised color="primary" >
        Primary
    </Button>
);

render(<App/>, document.getElementById('app'));