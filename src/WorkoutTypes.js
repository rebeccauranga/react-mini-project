import React from 'react';
import SetsAndReps from './SetsAndReps';
import LowerBodyExercises from './LowerBodyExercises';
import UpperBodyExercises from './UpperBodyExercises';
import CardioExercises from './CardioExercises';


class WorkoutTypes extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <LowerBodyExercises />
                <UpperBodyExercises />
                <CardioExercises /> 
            </div>
        );
    }


}

export default WorkoutTypes;