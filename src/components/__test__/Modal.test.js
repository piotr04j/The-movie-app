import React from 'react';
import { mount } from 'enzyme';
import Modal from '../Modal/Modal';


let wrapper;


describe('Modal component', () => {   

    beforeEach(() =>{
        wrapper = mount(  <Modal /> );
    })

    afterEach(() => {
        wrapper.unmount();
    });

    it('displays spinner', () => {
        expect(wrapper.find('Loader').length).toBe(1);   
    });

    it('displays container', () => {
        expect(wrapper.find('.modal').length).toBe(1);   
    });

});

