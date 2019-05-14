import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 



function Home() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={"NavBar"}>
                        <div className="dropdown">
                        <span>
                          <div className={"menu"}></div>
                          <div className={"menu"}></div>
                          <div className={"menu"}></div>
                        
                        </span>
                        <div className="dropdown-content">
            <Link className={"link"} to="/workouts"> Generate A Workout</Link>
            <Link className={"link"}to="/routines">Saved Workouts</Link>
            <Link className={"link"}to="/log">Log Your Workout</Link>
                        </div>
                      </div>
          </div>

    <div className={"shape"}></div>
    <div className={"shape"}></div>
    <div className={"shape"}></div>

        <h1>EXERgen</h1>
        <h5>Workout generator and tracker.</h5>

      </header>
       
        </div>
  
  );
}



export default Home;
