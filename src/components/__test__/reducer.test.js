import reducer from '../../store/reducer';
import * as actionsTypes from '../../store/actions/types';

describe('test reducer', () => {

    it('should return the initial state', () =>{
        expect(reducer({initState: 'random value'},{})).toEqual({initState: 'random value'});
    });
    
    it('should handle FETCH_SEARCHED_DATA', () =>{
        expect(reducer({},{ type: actionsTypes.FETCH_SEARCHED_DATA, payload: 'Hello world'})).toEqual({dataApi: 'Hello world', loading: false});
    });

    it('should handle START_LOADING', () =>{
        expect(reducer({},{ type: actionsTypes.START_LOADING, payload: false})).toEqual({loading: false});
    });
});