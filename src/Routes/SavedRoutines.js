import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
import Log from './Log';
import Table from 'react-bootstrap/Table';
import uuidv1 from 'uuid/v1';


import LowerSaved from '../Components/LowerSaved'
import UpperSaved from '../Components/UpperSaved'
import CardioSaved from '../Components/CardioSaved'


class SavedRoutines extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            routine: []
        }
    }
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <div className={"NavBar"}>
            <div className="dropdown">
                <span>
                    <div className={"menu"}></div>
                    <div className={"menu"}></div>
                    <div className={"menu"}></div>
                </span>
                <div className="dropdown-content">
                    <Link className={"link"}to="/">Home</Link>
                    <Link className={"link"} to="/workouts"> Generate A Workout</Link>
                    <Link className={"link"}to="/log">Log Your Workout</Link>
                </div>
            </div>
        </div>
        <h2>EXERgen</h2>
        <h5>Revisit your favorite workouts.</h5>
        <div>
           
        <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                   
                    <LowerSaved lower ={this.props.lowerRoutines} />
                        {/* <tr> */}
                            {/* <LowerSaved lower ={this.props.lowerRoutines} /> */}
                            {/* <LowerSavedSets /> */}
                            {/* <LowerSavedReps /> */}
                        {/* </tr> */}
                        <UpperSaved upper ={this.props.upperRoutines} />

                        {/* <tr> */}
                            {/* <UpperSaved upper ={this.props.upperRoutines} /> */}
                            {/* <UpperSavedSets /> */}
                        {/* </tr> */}
                    
                        
            </Table>
        </div>
            {/* <LowerSaved lower={this.props.lowerRoutines} />
        </div>
        <div>
            <UpperSaved upper={this.props.upperRoutines} />
        </div> */}
        {/* <div>
            <CardioSaved cardio={this.props.cardioRoutines} />
        </div>  */}

            </header>
        </div>
        )
    }
}      

export default SavedRoutines
