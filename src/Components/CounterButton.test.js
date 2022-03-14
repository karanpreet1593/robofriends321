import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
  expect(shallow(<CounterButton/>)).toMatchSnapshot();
});

it('instatnce counter', () => {
    expect(shallow(<CounterButton/>).instance().state.count).toBe(0);
  });

  it('increment counter', () => {
    const wrapper = shallow(<CounterButton color='red'/>);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    expect(instance.props.color).toBe('red');
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 2})

  });

  
