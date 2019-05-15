import React from 'react';
import uuidv1 from 'uuid/v1';




class LowerSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const ex = JSON.parse(localStorage.getItem('savedLowerArray')) || [];

        // const emptyArr = []
        // const lowerWorkouts = JSON.parse(localStorage.getItem('savedLowerExercises')) || [];
        // for (let i=0; i<lowerWorkouts.length; i++) {
        //     emptyArr.push(lowerWorkouts[i])
        // }
        // console.log(emptyArr)
        
        return (
            <tbody>{
                (ex) ?
                ex.map (w => (
                    <tr key={uuidv1()}>-------------------------------{w}<LowerSavedSets/><LowerSavedReps/></tr>
                 ))
                :
                <div></div>
            }
                   
            </tbody>
        )
    }
}

export default LowerSaved


const lowerSets = JSON.parse(localStorage.getItem('savedLowerSets'));
const lowerReps = JSON.parse(localStorage.getItem('savedLowerReps'));
function LowerSavedSets() {
    return (
        <td>{
            (lowerSets) ?
            lowerSets.map(s=>(
                <div key={uuidv1()}>{s}</div>  
            ))
            :
            <div></div>
        }
            </td>   
    )
}
function LowerSavedReps() {
    return (
        <td>{
            (lowerReps) ?
            lowerReps.map(r=>(
                <div key={uuidv1()}>{r}</div>  
            ))
            :
            <div></div>
        }
            </td>   
    )
}