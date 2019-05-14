import React from 'react';
import uuidv1 from 'uuid/v1';




class LowerSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        
        const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges','Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants','Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking'];
        const lowerWorkouts = JSON.parse(localStorage.getItem('savedLowerExercises'));
        const lowerSets = JSON.parse(localStorage.getItem('savedLowerSets'));
        const lowerReps = JSON.parse(localStorage.getItem('savedUpperReps'));
    
        return (
            <div>
                <ul>
                    {lowerWorkouts.map (w => (
                        <li key={uuidv1()}>{w}</li>
                     ))}
                    {lowerSets.map(s=>(
                            <li key={uuidv1()}>Sets: {s}</li>
                    ))}
                    {lowerReps.map(r=>(
                            <li key={uuidv1()}>Sets: {r}</li>
                        ))}
            
                </ul>
            </div>
        )
    }
}

export default LowerSaved