import React from 'react';
import { shallow } from 'enzyme';
import { SearchEngine } from '../Header/SearchEngine';

describe('the form test',()=>{

    let wrapper;
    const mockLoginfn = jest.fn();

    beforeEach(()=>{

        wrapper = shallow(<SearchEngine history={{push:mockLoginfn}} fetchSearchedData={mockLoginfn} />);
        wrapper.find('input[type="text"]').simulate('change', { target: { value: 'some data' } });
    });


    it('handles user input', () => {
        expect(wrapper.find('input').first().prop('value')).toEqual('some data');
    });

    it('invokes dispatch action after submit form', () =>{
        wrapper.find('form').simulate('submit',{preventDefault() {}});
        expect(mockLoginfn).toHaveBeenCalledTimes(2);
    });
    
    it('clears input after submit form', () =>{
        wrapper.find('form').simulate('submit',{preventDefault() {}});
        expect(wrapper.find('input[type="text"]').prop('value')).toEqual('');
    });

})


