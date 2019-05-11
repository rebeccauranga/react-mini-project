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
          <div className={"NavBar"}>
                        <div class="dropdown">
                        <span>
                          <div className={"menu"}></div>
                          <div className={"menu"}></div>
                          <div className={"menu"}></div>
                        
                        </span>
                        <div class="dropdown-content">
            <Link className={"link"} to="/workouts"> Generate A Workout</Link>
            <Link className={"link"}to="/routines">Saved Workouts</Link>
                        </div>
                      </div>
            {/* <Link className={"link"} to="/"> Home </Link> */}
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
