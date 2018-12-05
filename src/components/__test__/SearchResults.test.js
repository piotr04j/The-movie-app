import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from '../SearchResults/SearchResults';
import mdbAPI from '../../config/keys';
import moxios from 'moxios';

let wrapper;

describe('tests SearchResultsr', () => {

    describe('async methods',() => {

        let url = `https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=random_query&page=1&include_adult=false`

        beforeEach(() =>{
            moxios.install();
            moxios.stubRequest(url, {
                status: 200,
                response: { res: { data: { total_results: 3}}}
            })

            wrapper = shallow(<SearchResults query='random_query' />);

        });

        afterEach(() => {
            moxios.uninstall();
        });
       
    });

});