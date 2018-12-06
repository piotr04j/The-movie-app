import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '../NotFoundPage';
import { MemoryRouter } from 'react-router-dom';


it('renders correctly', () => {
    const tree = renderer.create(<MemoryRouter><NotFoundPage /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});