import React from 'react';
import '../App.css'; 
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

class Log extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            value: '',
            sets: '',
            reps: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleChangeSets = (event) => {
        this.setState({
            sets: event.target.value
        });
    }

    handleChangeReps = (event) => {
        this.setState({
            reps: event.target.value
        });
    }

    _handleSubmit = (event) => {
        // event.preventDefault();
        const ex = JSON.parse(localStorage.getItem('name')) || [];
        ex.push(this.state.value);
        localStorage.setItem('name', JSON.stringify(ex))

        this.setState({
            value: ''
        });
    }

    _handleSubmitSets = (event) => {
        // event.preventDefault();
        const ex = JSON.parse(localStorage.getItem('sets')) || [];
        ex.push(this.state.sets);
        localStorage.setItem('sets', JSON.stringify(ex))

        this.setState({
            sets: ''
        });
    }

    _handleSubmitReps = (event) => {
        // event.preventDefault();
        const ex = JSON.parse(localStorage.getItem('reps')) || [];
        ex.push(this.state.reps);
        localStorage.setItem('reps', JSON.stringify(ex))

        this.setState({
            reps: ''
        });
    }

    _wrapperFunction = () => {
        this._handleSubmit();
        this._handleSubmitReps();
        this._handleSubmitSets();
    }


    render() {

      return (
        <div className="App">
          <header className="App-header">

          <div className={"NavBar"}>
          {/* <h2>EXERgen</h2> */}
            <ul>
              <li><Link className={"link"} to="/"> Home</Link></li>
              <li> <Link className={"link"}to="/workouts">Generate</Link></li>
              <li><Link className={"link"}to="/routines">Revisit</Link></li>
            </ul>
          </div>
                      
      <div className={"small-shape"}></div>
      <div className={"small-shape"}></div>
      <div className={"small-shape"}></div>

    
    
              <div className="log">

                <form onSubmit={this._wrapperFunction}>
                    <label>
                    <input type="text" placeholder={'exercise'} value={this.state.value} onChange={this.handleChange} />
                    <input type="text" placeholder={'sets'} value={this.state.sets} onChange={this.handleChangeSets} />
                    <input type="text" placeholder={'reps'} value={this.state.reps} onChange={this.handleChangeReps} />
                    </label>
                    <input type="submit" value="Save Workout" />
               </form>
                    
                    

               <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                        <tr>
                            <ExerciseNames />
                            <NumberOfSets />
                            <NumberOfReps />
                        </tr>
                        
            </Table>


              </div>
            
    
          </header>
           
            </div>
      
      );
    }
} 

export default Log;

const localArr = JSON.parse(localStorage.getItem('name'));
const localArrSets = JSON.parse(localStorage.getItem('sets'));
const localArrReps = JSON.parse(localStorage.getItem('reps'));

console.log(localArr);
function ExerciseNames() {
    return(
        <td>{
            (localArr) ? 
                localArr.map((ex) => (
                    <div>
                        {ex}
                    </div>
                ))
                : 
                <div></div>
            }
    
            </td>
            )
}

function NumberOfSets() {
    return(
        <td>{
            (localArrSets) ? 
                localArrSets.map(num => (
                    <div>{num}</div>
                ))
                : 
                <div></div>
        }
        </td>
    );
}

function NumberOfReps() {
    return(
        <td>{
            (localArrReps) ? 
                localArrReps.map(num => (
                    <div>{num}</div>
                ))
                : 
                <div></div>
                
        }
         
        </td>
    );
}


