import React from 'react';
import renderer from 'react-test-renderer';
import SortBar from '../Lists/List/SortBar/SortBar';


it('renders correctly', () => {
    const tree = renderer.create(<SortBar/>).toJSON();
    expect(tree).toMatchSnapshot();
});