import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from '../store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const RootStore = ({children, initialState = { }}) => {
    const store = createStore(reducer, initialState={dataApi: {total_results: -1, results: []}}, composeWithDevTools(applyMiddleware(thunk)));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default RootStore;