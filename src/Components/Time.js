import React from 'react';

const cardio = ['Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking']



class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: ''
        }
    }
    
    render() {
        return(
            <div>
            <h3>Complete {this.props.time} minutes of {cardio[this.props.cardioExercises]}.</h3>
            </div>
        );
    }


}


export default Time;

