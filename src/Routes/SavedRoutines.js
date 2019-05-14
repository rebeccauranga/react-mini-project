import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
import Log from './Log';

import LowerSaved from '../Components/LowerSaved'
import UpperSaved from '../Components/UpperSaved'
import CardioSaved from '../Components/CardioSaved'


class SavedRoutines extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            routine: []
        }
    }
<<<<<<< HEAD
    render() {
=======

    render() {
        console.log(this.props);
        // const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges'];
        // const upperBodyExercises = ['Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants'];
        // const cardio = ['Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking'];
        // const lowerWorkouts = localStorage.getItem('lowerExercises').split(',')
        // const upperWorkouts = localStorage.getItem('upperExercises').split(',')
        // const cardioWorkouts = localStorage.getItem('cardio').split(',')

        // const lowerarray = []
        // const lowerparsed =  lowerWorkouts.forEach(num =>{
        //      lowerarray.push(parseInt(num))
        // })

        const parsearr = []
        /// Need to properly map out props and use that instead of localstorage getitem...maybe

        // const upperarray = []
        // const upperparsed =  upperWorkouts.forEach(num =>{
        //      upperarray.push(parseInt(num))
        // })
        // const cardioarray = []
        // const cardioparsed =  cardio.forEach(num =>{
        //      cardioarray.push(parseInt(num))
        // })

>>>>>>> cb473bb8cfb73f3f0134af093f3a3510f4b443d9
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
        <div>
            <LowerSaved lower={this.props.lowerRoutines} />
        </div>
        <div>
            <UpperSaved upper={this.props.upperRoutines} />
        </div>
        <div>
            <CardioSaved cardio={this.props.cardioRoutines} />
        </div> 
<<<<<<< HEAD

         <Log value={this.props.value} />
=======
        {/* <ul>
            {lowerarray.map(w =>(
                <li key={lowerBodyExercises[w]}>{lowerBodyExercises[w]}</li>
            ))}
            </ul> */}
        {/* <ul>
            {upperarray.map(w =>(
                <li key={upperBodyExercises[w]}>{upperBodyExercises[w]}</li>
            ))}
            </ul>
         <ul>
            {cardioarray.map(w =>(
                <li key={cardio[w]}>{cardio[w]}</li>
            ))}
        </ul> */}

>>>>>>> cb473bb8cfb73f3f0134af093f3a3510f4b443d9
            </header>
        </div>
        )
    }
}      

export default SavedRoutines