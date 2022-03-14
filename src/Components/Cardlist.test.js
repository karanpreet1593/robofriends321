import React from 'react';
import { shallow } from 'enzyme';
import Cardlist from './Cardlist';

it('renders without crashing', () => {
    const mockRobots = [
        {
            id:1,
            name:'johnjohn',
            username:'johnsnow',
            email:'john@gmail.com'
        }
       

    ]
  expect(shallow(<Cardlist robots={mockRobots}/>)).toMatchSnapshot();
});