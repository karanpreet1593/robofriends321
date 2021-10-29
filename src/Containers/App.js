import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import 'tachyons';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

import {setSearchField, requestRobots} from '../action';
// import { requestRobots } from '../reducers';


const mapStateToProps = state => {
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	} 
}

class App extends Component {
	
		componentDidMount(){
			this.props.onRequestRobots();
    	}
	

	render(){
		const {searchField, onSearchChange, robots,isPending} = this.props

		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		
			return isPending ?
			 <h1 className='tc'  >Loading</h1> :

		(
			<div className='tc'>
			  <h1 className='f1' >RoboFriends</h1>
			  < SearchBox searchChange={onSearchChange}/>
			  <Scroll>
               <ErrorBoundry>
			  	 <Cardlist robots={filteredRobots} />
			  	</ErrorBoundry>
			  </Scroll>
	         </div>
		);
		}
		
	}	

	
		
	

export default connect(mapStateToProps, mapDispatchToProps)(App);