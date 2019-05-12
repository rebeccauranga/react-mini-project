import React from 'react';
import Table from 'react-bootstrap/Table';

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
            {/* <h4>Exercises</h4> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Exercises</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                            {/* {this.props.lowerExercises.map(ex => (
                                lowerBodyExercises[ex]
                            ))} */}
                    <tr>
                        {/* <td> {this.props.lowerExercises.map(ex => (
                                lowerBodyExercises[ex]
                            ))}</td>
                        <td>3</td>
                        <td>10</td>
                        <td>
                        <button className={"done"} onClick={this._changeTextState}>Done</button>
                        </td> */}
                        <td>Squats</td>
                        <td>3</td>
                        <td>10</td>
                        <td>
                        <button className={"done"} onClick={this._changeTextState}>Done</button>
                        </td>
                    </tr>
                    <tr>
                        <td> Lunges</td>
                        <td>3</td>
                        <td>15</td>
                        <td>
                        <button className={"done"} onClick={this._changeTextState}>Done</button>
                        </td>
                    </tr>
                    <tr>
                        <td> Deaflifts</td>
                        <td>4</td>
                        <td>12</td>
                        <td>
                        <button className={"done"} onClick={this._changeTextState}>Done</button>
                        </td>
                    </tr>
                    <tr>
                        <td> Hamstring Curls</td>
                        <td>3</td>
                        <td>10</td>
                        <td>
                        <button className={"done"} onClick={this._changeTextState}>Done</button>
                        </td>
                    </tr>
                </tbody>
            </Table>

                
            {/* <ul className={this.state.class}>
            {this.props.lowerExercises.map(ex => (
                    <li>
                    {lowerBodyExercises[ex]}
                    <button className={"done"} onClick={this._changeTextState}>Done</button>
                    </li>
                    
                    ))}
               </ul> */}


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