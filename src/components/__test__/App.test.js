import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home';
import Header from '../Header';
import NotFoundPage from '../NotFoundPage';
import List from '../List';


it('displays correctly 404 page',() => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/random' ]}>
            <App />
        </MemoryRouter>
    )

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
});

it('displays correctly 404 page',() => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <App />
        </MemoryRouter>
    )

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
});

it('displays correctly 404 page',() => {
    let wrapper = mount(
        <MemoryRouter initialEntries={[ '/list' ]}>
            <App />
        </MemoryRouter>
    )

    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
});

