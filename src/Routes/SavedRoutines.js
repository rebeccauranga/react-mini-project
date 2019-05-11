import React from 'react';
import '../App.css';
import {
    Link,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'; 

class SavedRoutines extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            routine: []
        }
    }
    render() {

        return (
            <div className="App">

            <header className="App-header">
        <h1>EXERgen</h1>
        <h3>Workout generator and tracker.</h3>
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
            <Link className={"link"} to="/workouts"> Generate A Workout</Link>
                        </div>
                      </div>
            {/* <Link className={"link"} to="/"> Home </Link> */}
          </div>

            </header>
            <div>
                <h1>Saved Routines</h1>
            </div>
        </div>
        )
    }
}      

export default SavedRoutines