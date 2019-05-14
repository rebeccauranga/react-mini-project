import React from 'react';
import './App.css';
import Home from './Routes/Home';
import Workouts from './Routes/Workouts';
import SavedRoutines from './Routes/SavedRoutines';
import {
    Link,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'; 
const lowerWorkouts = localStorage.getItem('lowerExercises');
const upperWorkouts = localStorage.getItem('upperExercises');
const cardioWorkouts = localStorage.getItem('cardioExercises')


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state ={
    lower: {
      lowerWorkouts
    },
    upper: {
      upperWorkouts
    },
    cardio: {
      cardioWorkouts
    }
  }
}


render() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/workouts" component={Workouts} />
          <Route  path="/routines" 
        render= {(props) => (
          <SavedRoutines
          {...props}
          lowerRoutines={this.state.lower}
          upperRoutines={this.state.upper}
          cardioWorkouts={this.state.cardio}
          />
          )}
        />
      </Switch>
    </div>
      );
}
}


export default App;
