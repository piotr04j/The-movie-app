import React from 'react';
import renderer from 'react-test-renderer';
import Note from '../SearchResults/Note';

it('displays Note correctly', () =>{
    const tree = renderer.create(<Note/>).toJSON();
    expect(tree).toMatchSnapshot();
});