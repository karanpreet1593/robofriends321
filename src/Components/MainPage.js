import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import CounterButton from '../Components/CounterButton';
import 'tachyons';
import './MainPage.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';



class MainPage extends Component {
	
    componentDidMount(){
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        const { robots, searchField } = this.props;
        return robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
      }

render(){
    const { onSearchChange,isPending} = this.props

    
    
        return isPending ?
         <h1 className='tc'  >Loading</h1> :

    (
        <div className='tc'>
          <h1 className='f1' >RoboFriends</h1>
          <CounterButton />
          < SearchBox searchChange={onSearchChange}/>
          <Scroll>
           <ErrorBoundry>
               <Cardlist robots={this.filteredRobots()} />
              </ErrorBoundry>
          </Scroll>
         </div>
    );
    }
    
}	


    


export default MainPage;