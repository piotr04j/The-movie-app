import React from 'react';
import { shallow } from 'enzyme';
import { SearchEngine } from '../Header/SearchEngine';

describe('the form test',()=>{

    let wrapper;
    const mockLoginfnPush = jest.fn();
    const mockLoginfnFetch = jest.fn();
    const mockLoginfnLoading= jest.fn();

    beforeEach(()=>{

        wrapper = shallow(<SearchEngine history={{push:mockLoginfnPush}} fetchSearchedData={mockLoginfnFetch} startLoading={mockLoginfnLoading} />);
        wrapper.find('input[type="text"]').simulate('change', { target: { value: 'some data' } });
    });


    it('invokes dispatch action after submit form', () =>{
        wrapper.find('form').simulate('submit',{preventDefault() {}});
        expect(mockLoginfnFetch).toHaveBeenCalledTimes(1);
    });

    it('handles user input', () => {
        expect(wrapper.find('input').first().prop('value')).toEqual('some data');
    });

    it('clears input after submit form', () =>{
        wrapper.find('form').simulate('submit',{preventDefault() {}});
        expect(wrapper.find('input[type="text"]').prop('value')).toEqual('');
    });

    it('invokes dispatch action after submit button click', () =>{
        wrapper.find('[type="submit"]').simulate('click');
        expect(mockLoginfnLoading).toHaveBeenCalledTimes(1)
    });

})


