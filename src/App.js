import React from 'react';
import './App.css';
import Timer from './Timer';
import WorkoutTypes from './WorkoutTypes'
import SetsAndReps from './SetsAndReps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EXERgen</h1>
        <h3>Workout generator and tracker.</h3>
      </header>
        <div className="Components">
          <WorkoutTypes />
        </div>
       
    </div>
  );
}

export default App;
