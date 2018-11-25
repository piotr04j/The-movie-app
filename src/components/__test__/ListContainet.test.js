import React from 'react';
import { shallow } from 'enzyme';
import {ListContainer} from '../Lists/List/ListContainer';

import moxios from 'moxios';

let wrapper; 

describe('tests ListContainer', () => {
   

      
    describe('displays component',() => {
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

    describe('methods work',() => {

        it('checks handleSetOrder', ()=> {
            wrapper = shallow(<ListContainer match={{params: {page: 1}}}/>);
            wrapper.instance().handleSetOrder('ascending');
            wrapper.update();
            expect(wrapper.state('order')).toBe('ascending');
        });

        it('checks handlePagination: page 1', ()=> {
            wrapper = shallow(<ListContainer match={{params: {page: 1}}}/>);
            wrapper.setState({lastPage: 100})
            wrapper.instance().handlePagination();
            wrapper.update();
            expect(JSON.stringify(wrapper.state('totalPages'))).toEqual('[1,2,3,4,5]');
        });

        it('checks handlePagination: last page', ()=> {
            wrapper = shallow(<ListContainer match={{params: {page: 100}}}/>);
            wrapper.setState({lastPage: 100})
            wrapper.instance().handlePagination();
            wrapper.update();
            expect(JSON.stringify(wrapper.state('totalPages'))).toEqual('[96,97,98,99,100]');
        });

        it('checks handlePagination: random page', ()=> {
            wrapper = shallow(<ListContainer match={{params: {page: 57}}}/>);
            wrapper.setState({lastPage: 100})
            wrapper.instance().handlePagination();
            wrapper.update();
            expect(JSON.stringify(wrapper.state('totalPages'))).toEqual('[55,56,57,58,59]');
        });

      
    });

    describe('async methods',() => {

        beforeEach(() =>{
            moxios.install();
            moxios.stubRequest('xxx1', {
                status: 200,
                response: 'hello world'
            })
            wrapper = shallow(<ListContainer url='xxx' match={{params: {page: 1}}}/>);
        });

        afterEach(() => {
            moxios.uninstall();
        });
        
        it('checks getUpdatedData',  async ()=> {       
            const res = await wrapper.instance().getUpdatedData();  
            expect(res.data).toBe("hello world")
        });

    });

});

    