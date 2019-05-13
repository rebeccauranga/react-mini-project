import React from 'react';



class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
// console.log(this.props) 
    function save (prop) {
        if (prop.exercises ==='l') {
            localStorage.setItem('lowerExercises', prop.exercises)
        } else if (prop.type === 'c') {
            localStorage.setItem('cardioExercises', prop.exercises)
        } else if (prop.type==='u') {
            localStorage.setItem('upperExercises', prop.exercises) 
        }
    } 
    save(this.props)
   
        return (
             <button onClick={save}>Save Workout</button>
        )
    }
}

export default SaveButton