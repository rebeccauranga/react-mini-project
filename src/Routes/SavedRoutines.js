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
        <h4><Link to="/routines">Saved Routines</Link></h4>
        <h4><Link to="/"> Home Page</Link></h4>
        <h4><Link to="/workouts"> Workouts</Link></h4>
            </header>
            <div>
                <h1>Saved Routines</h1>
            </div>
        </div>
        )
    }
}      

export default SavedRoutines