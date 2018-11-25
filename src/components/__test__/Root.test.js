import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root';

const childComponent = (
    <div>
        <p>Hello World!</p>
    </div>
)

it('test component', () => {
    let wrapper = shallow(<Root children={childComponent} />);
    expect(wrapper.find('p').text()).toBe('Hello World!');
})