import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './Mainpage';

let wrapper;


beforeEach(()=>{
  const mockProps ={
    onRequestRobots:jest.fn(),
    robots:[],
    searchField:'',
    isPending:false
  }
  wrapper= shallow(<MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
        

  expect(wrapper).toMatchSnapshot();
});

it('it filters robots correctly', () => {
        

  expect(wrapper.instance().filteredRobots([])).toEqual([])
});

it(' filter robots correctly#2', () => {
        
  const mockProps2 ={
    onRequestRobots:jest.fn(),
    robots:[{
      id:3,
      name:'john',
      email:'john@gmail.com'
    }],
    searchField:'',
    isPending:false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2}/>)
  expect(wrapper2.instance().filteredRobots()).toEqual([{
    id:3,
    name:'john',
    email:'john@gmail.com'
  }])
  
});

it(' filter robots correctly#3', () => {
        
  const mockProps3 ={
    onRequestRobots:jest.fn(),
    robots:[{
      id:3,
      name:'john',
      email:'john@gmail.com'
    }],
    searchField:'',
    isPending:false
  }
  const wrapper3 = shallow(<MainPage {...mockProps3}/>)
  expect(wrapper3.instance().filteredRobots()).toEqual([{
    id:3,
    name:'john',
    email:'john@gmail.com'
  }])
  
});