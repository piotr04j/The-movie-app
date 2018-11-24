import React from 'react';
import { mount } from 'enzyme';
import {ListContainer} from '../Lists/List/ListContainer';


let wrapper;

describe('test  Listcontainer compnent', () => {

    afterEach(() =>{
        wrapper.unmount();
    })
    
    it('tests handleLastPage', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 100}}}/> );
        wrapper.setState({lastPage: 100})
        wrapper.update()
        expect(wrapper.find('Pagination').find('li').last().hasClass('disabled')).toBe(true)
    })
    
    it('tests handlePage', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 5}}}/> );
        wrapper.setState({lastPage: 100})
        wrapper.update()
        expect(wrapper.find('Pagination').find('li').at(3).hasClass('active')).toBe(true)
    })

    it('tests handleFirstPage', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 1}}}/> );
        wrapper.setState({lastPage: 100})
        wrapper.update()
        expect(wrapper.find('Pagination').find('li').first().hasClass('disabled')).toBe(true)
    })

    it('sets  order items', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 1}}}/> );
        wrapper.find('select').simulate('change',{ target: { value: 'ascending'}, preventDefault: () => {}});
        wrapper.update()
        expect(wrapper.state('order')).toBe('ascending')
    })
});