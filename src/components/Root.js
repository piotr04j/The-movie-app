import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from '../store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const store = createStore(reducer, {dataApi: {total_results: -1, results: []}, loading: true}, composeWithDevTools(applyMiddleware(thunk)));


const RootStore = ({children}) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default RootStore;
