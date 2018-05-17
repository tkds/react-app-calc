import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CalculatorContainer from './containers/CalculatorContainer';
import reducer from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <CalculatorContainer />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);