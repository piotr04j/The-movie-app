import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const RootStore = ({children, initialState = { err: null, searchedData: null }}) => {
    const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default RootStore;