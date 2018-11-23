import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Lists/List/Pagination';

let wrapper;

describe('checks pagination on first element', () =>{

    const mockFn = jest.fn();

    beforeEach( () =>{
        wrapper = shallow( <Pagination totalPages={[]} handleFirstPage={mockFn} currentPage={1} /> );
    });

    it('displays correctly', () => {
        expect(wrapper.find('li').first().text()).toBe('First');
    });
    
    it('displays correctly css class', () => {
        expect(wrapper.find('li').first().hasClass('disabled')).toBe(true);
    });


    it('calls onClick', () => {
        wrapper.find('li').first().simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});

describe('checks pagination on last element', () =>{

    const mockFn = jest.fn();

    beforeEach( () =>{
        wrapper = shallow( <Pagination totalPages={[]} handleLastPage={mockFn} currentPage={20} lastPage={20} /> );
    });

    it('displays correctly', () => {
        expect(wrapper.find('li').last().text()).toBe('Last');
    });

    it('displays correctly css class', () => {
        expect(wrapper.find('li').last().hasClass('disabled')).toBe(true);
    });

    it('calls onClick', () => {
        wrapper.find('li').last().simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});


describe('checks pagination on inner elements', () =>{

    const mockFn = jest.fn();

    beforeEach( () =>{
        wrapper = shallow( <Pagination totalPages={[1,2,3,4,5]} handlePage={mockFn}  currentPage={3} lastPage={20}/>);
    });

    it('displays correctly active elemnt', () => {
        expect(wrapper.find('li').at(3).hasClass('active')).toBe(true);
    });

    it('displays correctly inactive elemnt', () => {
        expect(wrapper.find('li').at(2).hasClass('active')).toBe(false);
    });

    it('calls onClick', () => {
        wrapper.find('li').at(3).simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
})



