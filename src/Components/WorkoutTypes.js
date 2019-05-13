import React from 'react';
import SetsAndReps from './SetsAndReps';
import LowerBodyExercises from './LowerBodyExercises';
import UpperBodyExercises from './UpperBodyExercises';
import CardioExercises from './CardioExercises';
import GeneratedExercise from './GeneratedExercise'


class WorkoutTypes extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            lowerExercises: [],
            upperExercises: [],
            cardio: [],
            sets: '',
            reps: '',
            selected: ''
        }
    }
    
    render() {
        return(
            <div>

                <div className={"workout"}>
                    <button onClick={this._wrapperFunctionLower}> Lower Body </button>
                    <button onClick={this._wrapperFunctionUpper}> Upper Body </button>
                    <button onClick={this._wrapperFunctionCardio}> Cardio </button>
                    
                </div>
                    <div className={"exAndSets"}>
                        <GeneratedExercise type={this.state.selected} lowerExercises={this.state.lowerExercises} upperExercises={this.state.upperExercises} cardioExercises={this.state.cardio} />
                        {/* <LowerBodyExercises lowerExercises={this.state.lowerExercises} /> */}
                        <SetsAndReps setNum={this.state.sets} repNum={this.state.reps}/>
                        {/* <UpperBodyExercises upperExercises={this.state.upperExercises}/> */}
                        {/* <CardioExercises cardioExercises={this.state.cardio}/>  */}
                            
                    </div>
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
            lowerExercises: exercisesGen,
            selected: 'l'
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
            upperExercises: exercisesGen,
            selected: 'u'
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
            reps: rand2,
            selected: 'c'
        });
    }

    _wrapperFunctionLower = () => {
        this._generateSets();
        this._updateLowerExercises();
    }

    _wrapperFunctionUpper = () => {
        this._generateSets();
        this._updateUpperExercises();
    }

    _wrapperFunctionCardio = () => {
        this._generateSets();
        this._updateCardioExercises();
    }


}

export default WorkoutTypes;