import React from 'react';
import SetsAndReps from './SetsAndReps';
import GeneratedExercise from './GeneratedExercise'
import Time from './Time'
import SaveButton from './SaveButton'


class WorkoutTypes extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            lowerExercises: [],
            upperExercises: [],
            cardio: [],
            sets: '',
            reps: '',
            time: '',
            selected: '',
            title: '',
            completed: false
        }
    }
    
    render() {
        console.log(this.state.selected);
        return(
            <div>

                <div className={"workout"}>
                    <button onClick={this._wrapperFunctionLower}> Lower Body </button>
                    <button onClick={this._wrapperFunctionUpper}> Upper Body </button>
                    <button onClick={this._wrapperFunctionCardio}> Cardio </button>
                    
                </div>
                    <div className={"exAndSets"}>
                    {this.state.title}
                        <GeneratedExercise type={this.state.selected} lowerExercises={this.state.lowerExercises} upperExercises={this.state.upperExercises} cardioExercises={this.state.cardio} completed={this.state.completed}/>
                        <div>
                            {
                            (this.state.selected === '') ?
                            <div></div>
                            : 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cb473bb8cfb73f3f0134af093f3a3510f4b443d9
                            (this.state.selected == 'c') ? 
                            <div>
                                <Time time={this.state.time} cardioExercises={this.state.cardio}/>
                            </div>
                            : 
                            (this.state.selected == 'l') ? 
                            <div> 
                                <SetsAndReps setNum={this.state.sets} repNum={this.state.reps} type={this.state.selected}/>
                                {/* <SaveButton exercises ={this.state.lowerExercises}/> */}

                            {/* <SaveButton /> */}
                            </div>
                            : 
                            (this.state.selected == 'u') ? 
                            <div> 
                                <SetsAndReps setNum={this.state.sets} repNum={this.state.reps} type={this.state.selected}/>
                                {/* <SaveButton exercises ={this.state.upperExercises}/> */}
                            </div>
                            :<div></div>
<<<<<<< HEAD
=======
                            (this.state.selected === 'c') ? 
                            <Time time={this.state.time} cardioExercises={this.state.cardio}/>
                            : 
                            (this.state.selected === 'l' || 'u') ? 
                            <SetsAndReps setNum={this.state.sets} repNum={this.state.reps} type={this.state.selected}/>
                            : <div></div>
>>>>>>> master
=======

>>>>>>> cb473bb8cfb73f3f0134af093f3a3510f4b443d9
                        }
                        </div>

                            
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

        this.setState({
            lowerExercises: exercisesGen,
            selected: 'l',
            title: 'Lower Body Exercises'
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

        this.setState({
            upperExercises: exercisesGen,
            selected: 'u',
            title: 'Upper Body Exercises'
        });
    }

    _updateCardioExercises = () => {
        const exercisesGen = []
        const length = 15;

        while (exercisesGen.length < 1) {
            const rand = Math.floor(Math.random() * length);
            if (!exercisesGen.includes(rand)) {
                exercisesGen.push(rand); 
            } 
        }

        this.setState({
            cardio: exercisesGen,
            selected: 'c',
            title: ''
        });
    }


    _generateSets = () => {
        const sets = [2, 3, 4, 5];
        const reps = [5, 6, 8, 10, 12, 15, 20];
        const rand = sets[Math.floor(Math.random() * sets.length)];
        const rand2 = reps[Math.floor(Math.random() * reps.length)];
        this.setState({
            sets: rand,
            reps: rand2,
            selected: 'c'
        });
    }

    _generateTime = () => {
        const time = [15, 20, 30, 45, 60];
        const rand = time[Math.floor(Math.random() * time.length)];
        console.log(rand);
        this.setState({
            time: rand
        });
    }


    _resetWorkout = () => {
        this.setState({
            completed: false
        })
    }

    _wrapperFunctionLower = () => {
        this._generateSets();
        this._updateLowerExercises();
        console.log(this.state.completed)
    }

    _wrapperFunctionUpper = () => {
        this._generateSets();
        this._updateUpperExercises();
        console.log(this.state.completed)
    }

    _wrapperFunctionCardio = () => {
        this._generateTime();
        this._updateCardioExercises();
        console.log(this.state.completed)
    }

}

export default WorkoutTypes;