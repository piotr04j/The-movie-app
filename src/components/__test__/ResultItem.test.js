import React from 'react';
import { shallow } from 'enzyme';
import ResultItem from '../SearchResults/ResultItem';

let wrapper;

it('displays correctly with Movie result', () => {
    wrapper = shallow(<ResultItem poster_path='random_url' />);
    expect(wrapper.find('img').prop('src')).toBe('http://image.tmdb.org/t/p/w500/random_url');
});

it('displays correctly with Person result', () => {
    wrapper = shallow(<ResultItem profile_path='random_url-2' />);
    expect(wrapper.find('img').prop('src')).toBe('http://image.tmdb.org/t/p/w500/random_url-2');
});

it('displays correctly without picture result', () => {
    wrapper = shallow(<ResultItem profile_path={undefined} />);
    expect(wrapper.find('img').prop('src')).toBe('/images/camera.jpg');
});

it('displays correctly TV type', () => {
    wrapper = shallow(<ResultItem profile_path={undefined} media_type="TV" name="title"/>);
    expect(wrapper.find('p').first().text()).toBe('TV: title');
});

it('displays correctly movie type', () => {
    wrapper = shallow(<ResultItem profile_path={undefined} media_type="movie" name="title"/>);
    expect(wrapper.find('p').first().text()).toBe('movie: title');
});