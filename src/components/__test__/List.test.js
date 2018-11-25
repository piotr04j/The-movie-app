import React from 'react';
import { shallow } from 'enzyme';
import List from '../Lists/List/List';


it('displays card',() =>{
    let wrapper = shallow( <List list={[{vote_average: 10, title:'test title', id: 1, }]} url="random/tv" />);
    expect(wrapper.find('.card').length).toBe(1);
})

it('not displays card',() =>{
    let wrapper = shallow( <List list={[]}  url="random/tv" />);
    expect(wrapper.find('.card').length).toBe(0);
})

it('not displays card',() =>{
    let wrapper = shallow( <List list={[{vote_average: 10, title:'test title', id: 1, }]} currentPage={5}  url="random/tv" />);
    expect(wrapper.find('span').text()).toBe('81.');
})
