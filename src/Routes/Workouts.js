import React from 'react';
import '../App.css';
import WorkoutTypes from '../Components/WorkoutTypes';
import { Link } from 'react-router-dom'; 

class Workouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routine: []
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
        <div className={"NavBar"}>
          {/* <h2>EXERgen</h2> */}
            <ul>
              <li><Link className={"link"} to="/"> Home</Link></li>
              <li> <Link className={"link"}to="/routines">REVISIT</Link></li>
              <li><Link className={"link"}to="/log">TRACK</Link></li>
            </ul>
          </div>
                      
      <div className={"small-shape"}></div>
      <div className={"small-shape"}></div>
      <div className={"small-shape"}></div>




          <div className="Components">
            <WorkoutTypes />
            
          </div>
        </header>
      </div>
      );
  }
}



export default Workouts;
