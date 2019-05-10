import React from 'react';

const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Calf Raises', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']

const upperBodyExercises = ['Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)']

const cardio = ['Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats']



class WorkoutName extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            lowerBodyWorkout: '',
            upperBodyWorkout: '',
            cardio: ''
        }
    }

    render() {
        return(
            <div>
                <button onClick={this._generateLowerBodyWorkout}>Lower Body Exercises</button>
                <h4>{this.state.lowerBodyWorkout}</h4>
                <button onClick={this._generateUpperBodyWorkout}>Upper Body Exercises</button>
                <h4>{this.state.upperBodyWorkout}</h4>
                <button onClick={this._generateCardio}>Cardio</button>
                <h4>{this.state.cardio}</h4>
                <button onClick={this._clear}>Clear Workout</button>

            </div>
        );
    }
    
    _generateLowerBodyWorkout = () => {
        const rand = lowerBodyExercises[Math.floor(Math.random() * lowerBodyExercises.length)];
        console.log(rand)
        this.setState({
            lowerBodyWorkout: rand
        });
    }

    _generateUpperBodyWorkout = () => {
        const rand = upperBodyExercises[Math.floor(Math.random() * upperBodyExercises.length)];
        console.log(rand)
        this.setState({
            upperBodyWorkout: rand
        });
    }

    _generateCardio = () => {
        const rand = cardio[Math.floor(Math.random() * cardio.length)];
        console.log(rand)
        this.setState({
            cardio: rand
        });
    }

    _clear = () => {
        this.setState({
            lowerBodyWorkout: '',
            upperBodyWorkout: '',
            cardio: ''
        })
    }


}

export default WorkoutName;