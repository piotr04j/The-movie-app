import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home/Home';

it('renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});