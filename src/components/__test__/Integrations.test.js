import React from 'react';
import { mount } from 'enzyme';
import {ListContainer} from '../Lists/List/ListContainer';
import { MemoryRouter } from 'react-router-dom';
import Root from '../Root';
import App from '../App';
import moxios from 'moxios';



let wrapper;

describe('test  Listcontainer compnent', () => {

    afterEach(() =>{
        wrapper.unmount();
    });
    
    it('tests handleLastPage', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 100}}}/> );
        wrapper.setState({lastPage: 100});
        wrapper.update();
        expect(wrapper.find('Pagination').find('li').last().hasClass('disabled')).toBe(true);
    });
    
    it('tests handlePage', ()=> {
      
        wrapper = mount( <ListContainer match={{params: {page: 17}}}/> );
        wrapper.setState({lastPage: 100});
        wrapper.instance().handlePagination();
        wrapper.update();
        expect(wrapper.find('Pagination').find('li').length).toBe(7);
   
    });

    it('tests handleFirstPage', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 1}}}/> );
        wrapper.setState({lastPage: 100});
        wrapper.instance().handlePagination();
        wrapper.update();
        expect(wrapper.find('Pagination').find('li').first().hasClass('disabled')).toBe(true);
    });

    it('sets  order items', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 1}}}/> );
        wrapper.find('select').simulate('change',{ target: { value: 'ascending'}, preventDefault: () => {}});
        wrapper.instance().handlePagination();
        wrapper.update();
        expect(wrapper.state('order')).toBe('ascending');
    });
});

describe('test search engine across app', () => {

    beforeEach(() => {
        wrapper = mount(<MemoryRouter><Root><App /></Root></MemoryRouter>);
        moxios.install();
        moxios.stubRequest('https://api.themoviedb.org/3/search/multi?api_key=064f93ab5b3de90df6871f296d5194f3&language=en-US&query=random__title&page=1&include_adult=false', {
            status: 200,
            response: { results: [{id: 1, title: 'random__title'}, {id: 2, title: 'random__title2'}], total_results: 2}
        });
    })

    afterEach(() => {
        moxios.uninstall();
        wrapper.unmount();
    })
    
    it('test search result ', (done)=> {

        wrapper.find('SearchEngine').find('[type="text"]').simulate('change', {
            target: {value: 'random__title'}
        });
        
        wrapper.find('Header').find('form').simulate('submit',  { preventDefault: jest.fn() });
 
        moxios.wait(() => {
            wrapper.update();
            expect(wrapper.find('SearchResults').find('ResultItem').length).toBe(2);
            done();
        })
      
    });
    
});