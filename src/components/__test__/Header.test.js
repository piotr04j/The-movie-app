import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Header  from '../Header';
import Root from  '../Root';



it('renders correctly', () => {
    const tree = renderer.create(
        <Root>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Root>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


it('sends actions correctly', () => {
    const component = (
        <Root>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Root>
    )

    let wrapper = mount(component);

    wrapper.unmount();


})