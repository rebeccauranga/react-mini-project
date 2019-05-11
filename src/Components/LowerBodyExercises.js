import React from 'react';



const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']

class LowerBodyExercises extends React.Component {
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
               
               <ul className={this.state.class}>
                {this.props.lowerExercises.map(ex => (
                    <li>
                    {lowerBodyExercises[ex]}
                    <button className={"done"} onClick={this._changeTextState}>Done</button>
                    </li>
                    
                    ))}
               </ul>

               <button>Save Workout</button>


            </div>
        );
    }


    _changeTextState = () => {
        this.setState({
            class: 'completed'
        });
    }





}




        
export default LowerBodyExercises;