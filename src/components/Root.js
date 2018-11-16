import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../store/reducer';

const RootStore = ({children, initialState = {}}) => {
    const store = createStore(reducer, initialState, applyMiddleware(thunk))

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default RootStore;