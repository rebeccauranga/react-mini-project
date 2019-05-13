import React from 'react';
import Exercise from './Exercise'

const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']
const upperBodyExercises = ['Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants']
const cardio = ['Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking']

class GeneratedExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          finished: this.props.completed,
        }
    }

    render() {

        return (
            <div>
               <ul>
                {(this.props.type==='l') ? 
                    this.props.lowerExercises.map(ex => (
                        <li key={lowerBodyExercises[ex]}>
                    <Exercise name={lowerBodyExercises[ex]} completed={this.state.finished} />
                    </li>))
                    : 
                    (this.props.type==='u') ? 
                    this.props.upperExercises.map(ex => (
                    <li key={upperBodyExercises[ex]}>
                     <Exercise name={upperBodyExercises[ex]} completed={this.state.finished} />
                    </li>
                    ))
                    :
                    (this.props.type==='c')?
                    this.props.cardioExercises.map(ex => (
                    <li key={cardio[ex]}>
                     {/* <Exercise name={cardio[ex]} completed={this.state.finished} /> */}
                    </li>
                    ))
                    :
                    <div></div>
                }
               </ul>

            </div>
        );
    }

}




        
export default GeneratedExercise;