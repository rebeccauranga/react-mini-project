import React from 'react';
import uuidv1 from 'uuid/v1';
import Table from 'react-bootstrap/Table';

// const ex = JSON.parse(localStorage.getItem('savedUpperArray')) || [];

// const upperWorkouts = JSON.parse(localStorage.getItem('savedUpperExercises'))
// var i,j,temparray,chunk = 4;
// for (i=0,j=upperWorkouts.length; i<j; i+=chunk) {
//  temparray = upperWorkouts.slice(i,i+chunk);
//  console.log(temparray);
// // do whatever
// ex.push(temparray);
// localStorage.setItem('savedUpperArray', JSON.stringify(ex))
// }




class UpperSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const ex = JSON.parse(localStorage.getItem('savedUpperArray')) || [];

        return (
        
            <tbody>
                    {(ex) ?
                    ex.map(w =>(
                        <tr key={uuidv1()}>-------------------------------{w}<UpperSavedSets /><UpperSavedReps /></tr>
                    ))
                    :
                    <div></div>
                    }
            </tbody>
        )
    }
}

export default UpperSaved
const upperSets = JSON.parse(localStorage.getItem('savedUpperSets'));
const upperReps = JSON.parse(localStorage.getItem('savedUpperReps'));

function UpperSavedSets() {
    return (
        <td>{
            (upperSets) ?
            upperSets.map(s=>(
                <div key={uuidv1()}>{s}</div>  
            ))
            :
            <div></div>
        }
            </td>   
    )
}

function UpperSavedReps() {
        return (
            <td>{
                (upperReps) ?
                upperReps.map(s=>(
                    <div key={uuidv1()}>{s}</div>  
                ))
                :
                <div></div>
            }
                </td>   
        )
    }