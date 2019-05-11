import React from 'react';
import '../App.css';
import Timer from '../Components/Timer';
import WorkoutTypes from '../Components/WorkoutTypes';
import SetsAndReps from '../Components/SetsAndReps';
import SavedRoutines from './SavedRoutines';
import {
    Link,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'; 

function Workouts() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXERgen</h1>
        <h3>Workout generator and tracker.</h3>
        <div className={"NavBar"}>
                        <div class="dropdown">
                        <span>
                          <div className={"menu"}></div>
                          <div className={"menu"}></div>
                          <div className={"menu"}></div>
                        
                        </span>
                        <div class="dropdown-content">
            <Link className={"link"}to="/">Home</Link>
            <Link className={"link"}to="/routines">Saved Workouts</Link>
            <Link className={"link"} to="/workouts"> Generate A Workout</Link>
                        </div>
                      </div>
            {/* <Link className={"link"} to="/"> Home </Link> */}
          </div>

         


      </header>
        <div className="Components">
          <WorkoutTypes />
          <p>Share your workout!https://ctt.ac/8wRC0</p>
        </div>
    </div>
  );
}



export default Workouts;
