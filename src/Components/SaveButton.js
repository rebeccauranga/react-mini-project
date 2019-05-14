import React from 'react';



class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {


    // let oldItems = JSON.parse(localStorage.getItem('lowerExercises')) || {};

// console.log(this.props) 
    // function save (prop) {
    //     if (prop.exercises ==='l') {
    //         localStorage.setItem('lowerExercises', prop.exercises)
    //     } else if (prop.type === 'c') {
    //         localStorage.setItem('cardioExercises', prop.exercises)
    //     } else if (prop.type==='u') {
    //         localStorage.setItem('upperExercises', prop.exercises) 
    //     }
    // } 
   
        return (
            <div>
                <button onClick={this._save}>Save</button>
                <a href="https://ctt.ac/8wRC0" target="blank"> Share your workout! </a>
            </div>
        )
    }
    _save = () => {
        const exercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges','Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants','Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking'];

        if (this.props.type === '') {
            return null
        } else if (this.props.type ==='l') {
            const ex = JSON.parse(localStorage.getItem('savedLowerExercises')) || [];
            this.props.exercises.forEach(ind => {
                ex.push(exercises[ind])
            })
            localStorage.setItem('savedLowerExercises', JSON.stringify(ex))

            const reps = JSON.parse(localStorage.getItem('savedLowerReps')) || [];
            reps.push(this.props.reps)
            localStorage.setItem('savedLowerReps', JSON.stringify(reps))

            const sets = JSON.parse(localStorage.getItem('savedLowerSets')) || [];
            sets.push(this.props.sets)
            localStorage.setItem('savedLowerSets', JSON.stringify(sets))

        } else if (this.props.type === 'c') {
            const ex = JSON.parse(localStorage.getItem('cardioExercises')) || [];
            // ex.push(this.props.exercises);
            this.props.exercises.forEach(ind => {
                ex.push(exercises[ind+30])
            })
            localStorage.setItem('cardioExercises', JSON.stringify(ex))

            const time = JSON.parse(localStorage.getItem('savedCardioTime')) || [];
            time.push(this.props.time)
            localStorage.setItem('savedCardioTime', JSON.stringify(time))

        
        } else if (this.props.type==='u') {

            const ex = JSON.parse(localStorage.getItem('savedUpperExercises')) || [];
            // ex.push(this.props.exercises);
            this.props.exercises.forEach(ind => {
                ex.push(exercises[ind+15])
            })
            localStorage.setItem('savedUpperExercises', JSON.stringify(ex)) 

            const reps = JSON.parse(localStorage.getItem('savedUpperReps')) || [];
            reps.push(this.props.reps)
            localStorage.setItem('savedUpperReps', JSON.stringify(reps))

            const sets = JSON.parse(localStorage.getItem('savedUpperSets')) || [];
            sets.push(this.props.sets)
            localStorage.setItem('savedUpperSets', JSON.stringify(sets))
        }
    } 
}

export default SaveButton