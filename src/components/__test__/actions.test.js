import * as actions from '../../store/actions';
import * as actionsTypes from '../../store/actions/types';

describe('actions', () =>{
    it('should create an action fetchSearchedData', () => {
        const data = 'hello world!';
        const expectedAction = {
            type: actionsTypes.FETCH_SEARCHED_DATA,
            payload: data
        }
        expect(actions.fetchSearchedData(data)).toEqual(expectedAction);
    });
});