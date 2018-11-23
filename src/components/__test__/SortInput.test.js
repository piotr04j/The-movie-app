import React from 'react';
import { shallow } from 'enzyme';
import SortInput from '../Lists/List/SortBar/SortInput';

describe('checks SortInput component', () => {

    let wrapper;
    const mockFn = jest.fn();

    beforeEach( () => {
        wrapper = shallow( 
            <SortInput 
                optionInputs={[{content: 'One', val: 'value one'}, {content: 'Two', val: 'value two'}]}
                label="order"
                getOptionValue={mockFn}
            /> );
    });

    it('checks option value', () => {
        expect(wrapper.find('option').first().prop('value')).toBe('value one');
    });

    it('checks option text', () => {
        expect(wrapper.find('option').last().text()).toBe('Two');
    });

    it('checks label text', () => {
        expect(wrapper.find('label').text()).toBe('order');
    });

    it('calls onChange', () => {
        wrapper.find('select').simulate('change',{ target: { value: 'random value'}, preventDefault: () => {}});
        expect(wrapper.state('value')).toBe('random value');
        expect(mockFn).toHaveBeenCalled();
    });

});