import * as actionsTypes from '../actions/types';

export default (state, action) => {
    switch(action.type){
        case actionsTypes.FETCH_SEARCHED_DATA: 
            return {
                ...state,
                query: action.payload
            }
        default:
            return state;
    }
}