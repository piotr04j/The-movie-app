import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../Hoc/ErrorBoundary';

let wrapper;

it('handles correctly errors', () => {
    wrapper = shallow(<ErrorBoundary />);
    wrapper.setState({ hasError: true , errorMessage: 'some error'});
    expect(wrapper.find('p').first().text()).toBe('Error: some error');
});

it('displays correctly child component', () => {
    const ChildComponent = () => { 
        return <div>some component</div>;
    };
    wrapper = shallow(
        <ErrorBoundary > 
            <ChildComponent />
        </ErrorBoundary> 
    );
    wrapper.setState({ hasError: false});
    expect(wrapper.dive().find('div').text()).toBe('some component');
});
