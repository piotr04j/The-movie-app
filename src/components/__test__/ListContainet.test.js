import React from 'react';
import { shallow,mount } from 'enzyme';
import {ListContainer} from '../Lists/List/ListContainer';
import mdbAPI from '../../config/keys';
import moxios from 'moxios';


describe('tests ListContainer', () => {
   const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${mdbAPI.key}&language=en-US&page=`;
   let wrapper; 
      
    describe('displays components',() => {
        beforeEach(() => {
            wrapper = shallow(<ListContainer match={{params:1}}/>);
        });
        it('displays SortBar', () =>{
            expect(wrapper.find('SortBar').length).toBe(1);
        });
        it('displays List', () =>{
               expect(wrapper.find('List').length).toBe(1);
        });
        it('displays Modal', () =>{
            expect(wrapper.find('Modal').length).toBe(1);
        });
        it('dosnet\'t displays Modal', () =>{
            wrapper.setState({ loading: false})
            expect(wrapper.find('Modal').length).toBe(0);
        });
        it('displays Pagination', () =>{
            expect(wrapper.find('Pagination').length).toBe(1);
        });
    });

    it('calls function in componentDidMount', ()=>{
        const spy = jest.spyOn(ListContainer.prototype, 'componentDidMount');
        const wrapper = mount(<ListContainer match={{params:1}} />)
        wrapper.instance().handlePagination();
        expect(spy).toHaveBeenCalledTimes(1);
    })
  
});