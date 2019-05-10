import React from 'react';
import './App.css';
import BodyPartChooser from './BodyPartChooser';
import Timer from './Timer';
import WorkoutName from './WorkoutName'
import SetsAndReps from './SetsAndReps';
// import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXERgen</h1>
        <h3>Workout generator & tracker.</h3>
      </header>
        <div className="Components">
          <SetsAndReps />
          <WorkoutName />
          <Timer countdown={3}/>
        </div>
        {/* <BodyPartChooser /> */}
    </div>
  );
}

export default App;
