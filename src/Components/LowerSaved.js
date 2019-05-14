import React from 'react';
import uuidv1 from 'uuid/v1';




class LowerSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const emptyArr = []
        const lowerWorkouts = JSON.parse(localStorage.getItem('savedLowerExercises')) || [];
        for (let i=0; i<lowerWorkouts.length; i++) {
            emptyArr.push(lowerWorkouts[i])
        }
        console.log(emptyArr)
        
        return (
            <td>{
                (lowerWorkouts) ?
                emptyArr.map (w => (
                    <div key={uuidv1()}>{w}</div>
                 ))
                :
                <div></div>
            }
                   
            </td>
        )
    }
}

export default LowerSaved