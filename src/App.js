import React from 'react';
import './App.css';
import BodyPartChooser from './BodyPartChooser';
import Timer from './Timer';
import WorkoutName from './WorkoutName'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exergen</h1>
        <h3>Workout generator & tracker.</h3>

        {/* <BodyPartChooser /> */}
        <Timer />
        <WorkoutName />
      </header>
    </div>
  );
}

export default App;
