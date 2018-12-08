import * as actionsTypes from '../actions/types';
import axios from 'axios';
import mdbAPI from '../../config/keys';


export const fetchSearchedData =  (data) =>{
    return async function (dispatch) { 
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=${data}&page=1&include_adult=false`);
            dispatch({
                type: actionsTypes.FETCH_SEARCHED_DATA,
                payload: response.data
            })
    }
}


export const startLoading = () => {
    return {
        type: actionsTypes.START_LOADING,
        payload: true
    }
}
