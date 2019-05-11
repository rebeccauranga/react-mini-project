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
              </div>
            </div>
        </div>


        <h2>EXERgen</h2>
        <h5>Generate a workout below.</h5>


        <div className="Components">
          <WorkoutTypes />
          <a href="https://ctt.ac/8wRC0" target="blank"> Share your workout! </a>
        </div>
      </header>
    </div>
  );
}



export default Workouts;
