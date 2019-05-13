import React from 'react';

const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']
const upperBodyExercises = ['Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants']
const cardio = ['Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking']

class GeneratedExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'working'
        }
    }

    render() {
        console.log(this.props.exercises);
        return (
            <div>
            <h4>Exercises</h4>
               <ul className={this.state.class}>
                {(this.props.type==='l') ? 
                    this.props.lowerExercises.map(ex => (
                    <li>
                    {lowerBodyExercises[ex]}
                    <button className={"done"} onClick={this._changeTextState}>Done</button>
                    </li>))
                    : 
                    (this.props.type==='u') ? 
                    this.props.upperExercises.map(ex => (
                    <li>
                    {upperBodyExercises[ex]}
                    <button className={"done"} onClick={this._changeTextState}>Done</button>
                    </li>
                    ))
                    :
                    (this.props.type==='c')?
                    this.props.cardioExercises.map(ex => (
                        <li>{cardio[ex]}</li>
                    ))
                    :
                    <div>doh</div>
                }
               </ul>


            </div>
        );
    }


    _changeTextState = () => {
        this.setState({
            class: 'completed'
        });
    }





}




        
export default GeneratedExercise;