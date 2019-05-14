import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
import Log from './Log';


class SavedRoutines extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            routine: []
        }
    }
    render(props) {
        const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']
        // const workout = localStorage.getItem('lowerExercises').split(',')
        const array = []
        // const parsed =  workout.forEach(num =>{
        //      array.push(parseInt(num))
        // })
        console.log(array)
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
                    <Link className={"link"}to="/">Home</Link>
                    <Link className={"link"} to="/workouts"> Generate A Workout</Link>
                    <Link className={"link"}to="/log">Log Your Workout</Link>
                </div>
            </div>
        </div>


        <h2>EXERgen</h2>
        <h5>Revisit your favorite workouts.</h5>
        <ul>
            {array.map(w =>(
                <li key={lowerBodyExercises[w]}>{lowerBodyExercises[w]}</li>
            ))}
        </ul>


        <Log value={this.props.value} />
            </header>
        </div>
        )
    }
}      

export default SavedRoutines