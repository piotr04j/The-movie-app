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
        wrapper.update();
        expect(wrapper.find('Pagination').find('li').at(3).hasClass('active')).toBe(true);
    });

    it('tests handleFirstPage', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 1}}}/> );
        wrapper.setState({lastPage: 100});
        wrapper.update();
        expect(wrapper.find('Pagination').find('li').first().hasClass('disabled')).toBe(true);
    });

    it('sets  order items', ()=> {
        wrapper = mount( <ListContainer match={{params: {page: 1}}}/> );
        wrapper.find('select').simulate('change',{ target: { value: 'ascending'}, preventDefault: () => {}});
        wrapper.update();
        expect(wrapper.state('order')).toBe('ascending');
    });
});

// describe('test  search engine across app', () => {

//     afterEach(() =>{
//         moxios.uninstall();
//         wrapper.unmount();
//     });
    
//     it('test search result ', ()=> {
//         moxios.install();
//         moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
//             status: 200,
//             response: [{name: 'comment one'},{name: 'comment two'}]
//         });
//         wrapper = mount(<MemoryRouter><Root><App /></Root></MemoryRouter>);
//         wrapper.find('SearchEngine').find('[type="text"]').simulate('change', {
//             target: {value: 'random title'}
//         });
//         // wrapper.find('SearchEngine').find('[type="text"]').({formValue: 'hello'})
//         // wrapper.find('SearchEngine').setState({formValue: 'hello'})
//         wrapper.find('Header').find('form').simulate('submit',  { preventDefault: jest.fn() })
//         wrapper.update();
//         expect(wrapper.find('SearchResults').props()).toBe(2)
//     });
    
// });