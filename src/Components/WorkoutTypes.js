import React from 'react';
import SetsAndReps from './SetsAndReps';
import LowerBodyExercises from './LowerBodyExercises';
import UpperBodyExercises from './UpperBodyExercises';
import CardioExercises from './CardioExercises';



class WorkoutTypes extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            lowerExercises: [],
            upperExercises: [],
            cardio: [],
            sets: '',
            reps: ''
        }
    }
    
    render() {
        return(
            <div>
                <h4>Exercises</h4>
                    <button onClick={this._wrapperFunction}> Lower Body </button>
                        <LowerBodyExercises lowerExercises={this.state.lowerExercises} />
                    <button onClick={this._updateUpperExercises}> Upper Body </button>
                        <UpperBodyExercises upperExercises={this.state.upperExercises}/>
                    <button onClick={this._updateCardioExercises}> Cardio </button>
                        <CardioExercises cardioExercises={this.state.cardio}/> 
                        
                <SetsAndReps setNum={this.state.sets} repNum={this.state.reps}/>
            </div>
        );
    }
    

    _updateLowerExercises = () => {
        const exercisesGen = []
        const length = 15;

        while (exercisesGen.length < 4) {
            const rand = Math.floor(Math.random() * length);
            if (!exercisesGen.includes(rand)) {
                exercisesGen.push(rand); 
            } 
        }
        console.log(exercisesGen);

        this.setState({
            lowerExercises: exercisesGen
        });
    }

    _updateUpperExercises = () => {
        const exercisesGen = []
        const length = 15;

        while (exercisesGen.length < 4) {
            const rand = Math.floor(Math.random() * length);
            if (!exercisesGen.includes(rand)) {
                exercisesGen.push(rand); 
            } 
        }
        console.log(exercisesGen);

        this.setState({
            upperExercises: exercisesGen
        });
    }

    // simplify function because we only need one cardio exercise
    _updateCardioExercises = () => {
        const exercisesGen = []
        const length = 15;

        while (exercisesGen.length < 1) {
            const rand = Math.floor(Math.random() * length);
            if (!exercisesGen.includes(rand)) {
                exercisesGen.push(rand); 
            } 
        }
        console.log(exercisesGen);

        this.setState({
            cardio: exercisesGen
        });
    }


    _generateSets = () => {
        const sets = [2, 3, 4, 5];
        const reps = [5, 6, 8, 10, 12, 15, 20];
        const rand = sets[Math.floor(Math.random() * sets.length)];
        const rand2 = reps[Math.floor(Math.random() * reps.length)];
        console.log(rand);
        this.setState({
            sets: rand,
            reps: rand2
        });
    }

    _wrapperFunction = () => {
        this._generateSets();
        this._updateLowerExercises();
    }


}

export default WorkoutTypes;