import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from '../SearchResults/SearchResults';

let wrapper;

describe('tests SearchResultsr', () => {


        // it('displays Modal correctly', () => {
        //     wrapper = shallow(<SearchResults query='random_query' />);
        //     wrapper.setState({loading: false});  
        //     wrapper.update();
        //     expect(wrapper.find('Modal').length).toBe(0);
        // });

        it('displays if user dosen\'t have results', () => {
            wrapper = shallow(<SearchResults dataApi={{total_results: 0, results: [{id: 1},{id: 2},{id: 3},{id: 4}]}} />);
            expect(wrapper.find('p').text()).toBe('Please try another search. No results matched your search.');
        });

        it('displays Note correctly', () => {
            wrapper = shallow(<SearchResults dataApi={{total_results: 11, results: [{id: 1},{id: 2},{id: 3},{id: 4}]}} />);
            expect(wrapper.find('Note').length).toBe(1);
        });
        it('displays ResultItem correctly', () => {
            wrapper = shallow(<SearchResults dataApi={{results: [{id: 1},{id: 2},{id: 3},{id: 4}]}} />);
            expect(wrapper.find('ResultItem').length).toBe(4);
        });
       
});