import * as actionsTypes from '../actions/types';

export const fetchSearchedData = (data) =>{
    return {
        type: actionsTypes.FETCH_SEARCHED_DATA,
        payload: data
    }
}
