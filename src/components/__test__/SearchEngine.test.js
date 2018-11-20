import React from 'react';
import { shallow } from 'enzyme';
import { SearchEngine } from '../Header/SearchEngine';


describe('the form test',()=>{

    let wrapper;
    const mockLoginfn = jest.fn();

    beforeEach(()=>{

        wrapper = shallow(<SearchEngine  fetchSearchedData={mockLoginfn} />);
        wrapper.find('input[type="text"]').simulate('change', { target: { value: 'some data' } });
    });


    it('handles user input', () => {
        expect(wrapper.find('input').first().prop('value')).toEqual('some data');
    });

    it('invokes dispatch action after submit form', () =>{
        wrapper.find('form').simulate('submit',{preventDefault() {}});
        expect(mockLoginfn.mock.calls.length).toBe(1)
    });
    
    it('clears input after submit form', () =>{
        wrapper.find('form').simulate('submit',{preventDefault() {}});
        expect(wrapper.find('input[type="text"]').prop('value')).toEqual('');
    });

})


