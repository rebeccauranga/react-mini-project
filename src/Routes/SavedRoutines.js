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
        <div className={"NavBar"}>
            <div class="dropdown">
                <span>
                    <div className={"menu"}></div>
                    <div className={"menu"}></div>
                    <div className={"menu"}></div>
                </span>
                <div class="dropdown-content">
                    <Link className={"link"}to="/">Home</Link>
                    <Link className={"link"} to="/workouts"> Generate A Workout</Link>
                </div>
            </div>
        </div>


        <h2>EXERgen</h2>
        <h5>Revisit your favorite workouts.</h5>

            </header>
        </div>
        )
    }
}      

export default SavedRoutines