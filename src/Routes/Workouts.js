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
        <h4><Link to="/routines">Saved Routines</Link></h4>
        <h4><Link to="/"> Home Page</Link></h4>
        <h4><Link to="/workouts"> Workouts</Link></h4>

      </header>
        <div className="Components">
          <WorkoutTypes />
        </div>
    </div>
  );
}



export default Workouts;
