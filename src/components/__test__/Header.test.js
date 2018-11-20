import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Header  from '../Header/Header';
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

