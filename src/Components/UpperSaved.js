import React from 'react';
import uuidv1 from 'uuid/v1';
import Table from 'react-bootstrap/Table';


class UpperSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const upperWorkouts = JSON.parse(localStorage.getItem('savedUpperExercises'))
        const upperSets = JSON.parse(localStorage.getItem('savedUpperSets'))
        const upperReps = JSON.parse(localStorage.getItem('savedUpperReps'))


        
        return (
            <div>
               <ul>
                    {upperWorkouts.map(w =>(
                        <li key={uuidv1()}>{w}</li>
                    ))}
                    {upperSets.map(s=>(
                        <li key={uuidv1()}>Sets: {s}</li>
                    ))}
                    {upperReps.map(r=> (
                        <li key={uuidv1()}>Reps: {r}</li>    
                    ))}
                </ul>

            </div>
        )
    }
}

export default UpperSaved