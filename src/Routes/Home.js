import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 



function Home() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={"NavBar"}>
            <ul>
              <li><Link className={"link"} to="/workouts"> Generate</Link></li>
              <li> <Link className={"link"}to="/routines">REVISIT</Link></li>
              <li><Link className={"link"}to="/log">TRACK</Link></li>
            </ul>
          </div>
                      
      <div className={"shape"}></div>
      <div className={"shape"}></div>
      <div className={"shape"}></div>

        <h5>Workout generator and tracker.</h5>
        <h1>EXERgen</h1>

       
      </header>
    </div>
  
  );
}



export default Home;
