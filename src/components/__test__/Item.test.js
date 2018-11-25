import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import Item from '../Lists/List/Item';
import mdbAPI from '../../config/keys'


describe('tests Item component', () =>{

    let wrapper;
    
  
    describe('check display elemen(ts', () => {
        
        const mockFn =jest.fn();

        beforeEach(() =>{
            moxios.install();
            moxios.stubRequest(`https://api.themoviedb.org/3/tv/1?api_key=${mdbAPI.key}&language=en-US`,{
                status: 200,
                response: { 
                    id: 57,
                    name: 'title',
                    poster_path: 'random/path',
                    overview: 'text',
                    genres: [{id:1, name: 'horro'}],
                }
            });   
            wrapper = shallow( <Item  history={{goBack: mockFn}} match={{params: {type: 'tv', id: 1}}} />);
     
        })
    
        afterEach(() => {
            moxios.uninstall();
        })
    

        it('tests component with correctly response from api', () =>{
            expect(wrapper.find('h2').text()).toBe('title');
        });

        it('displays title', () =>{
            expect(wrapper.find('img').prop('src')).toBe('http://image.tmdb.org/t/p/w500/random/path');
        });

        it('displays title', () =>{
            expect(wrapper.find('p').text()).toBe('Overview: text');
        });

        it('displays title', () =>{
            expect(wrapper.find('li').length).toBe(2);
        });

        it('checks displays modal', () =>{
            expect(wrapper.state('loading')).toBe(false);
        });

        it('checks displays modal', () =>{
            expect(wrapper.state('loading')).toBe(false);
        });

        it('checks onClick call on button', () =>{
            wrapper.find('button').simulate('click');
            wrapper.update();
            expect(mockFn).toBeCalled();
        });

    });

    describe('tests component with incorrectly response from api', () => {        
    
        it('check displays modal', () =>{
            wrapper.setState({ error: true });
            expect(wrapper.find('Link').length).toBe(1);
        });
    
    });
});