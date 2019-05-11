import React from 'react';
import './App.css';
import Timer from './Timer';
import WorkoutTypes from './WorkoutTypes';
import SetsAndReps from './SetsAndReps';
import SavedRoutines from './SavedRoutines';
import {
    Link,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'; 

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXERgen</h1>
        <h3>Workout generator and tracker.</h3>
        <h4><Link to="/routines">Saved Routines</Link></h4>
      </header>
        <div className="Components">
          <WorkoutTypes />
        )} />
        </div>
    </div>
  );
}



export default Home;
