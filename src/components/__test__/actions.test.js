import * as actions from '../../store/actions';
import * as actionsTypes from '../../store/actions/types';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

describe('actions', () =>{

    describe('async actions', () =>{

        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);

        beforeEach(function () {
            moxios.install();
        });
    
        afterEach(function () {
            moxios.uninstall();
        });

        it('should create an action fetchSearchedData', () => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: 'test value',
                });
            });

            const expectedActions = [{ type: actionsTypes.FETCH_SEARCHED_DATA, payload: 'test value'}];
          
            const store = mockStore();

            return store.dispatch(actions.fetchSearchedData()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    
        });

    });

    describe('sync actions', () =>{ 

        it('should create an action startLoading', () => {
            const expectedAction = {
              type: actionsTypes.START_LOADING,
              payload: true
            }
            expect(actions.startLoading()).toEqual(expectedAction)
        });
    });
   
});