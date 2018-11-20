import React from 'react';
import {  mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import NotFoundPage from '../NotFoundPage';
import List from '../List/ListContainer';
import Header from '../Header/Header';
import Root from '../Root';

let wrapper;

afterEach(()=>{
    wrapper.unmount();
});


it('displays correctly 404 page',() => {
    wrapper = mount(
        <Root>
            <MemoryRouter initialEntries={[ '/random' ]}>
                <App />
            </MemoryRouter>
        </Root>
    )

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
});

it('displays correctly 404 page',() => {
    wrapper = mount(
        <Root>
            <MemoryRouter initialEntries={[ '/' ]}>
                <App />
            </MemoryRouter>
        </Root>
    )

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);

});

it('displays correctly 404 page',() => {
    wrapper = mount(
        <Root>
            <MemoryRouter initialEntries={[ '/list' ]}>
                <App />
            </MemoryRouter>
        </Root>
    )

    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);

});

