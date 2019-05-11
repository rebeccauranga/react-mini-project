import React from 'react';
import '../App.css';
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
        <h4><Link to="/"> Home Page</Link></h4>
        <h4><Link to="/workouts"> Workouts</Link></h4>


      </header>
        <div className="Components">
          <h1>Home page</h1>
        </div>
    </div>
  );
}



export default Home;
