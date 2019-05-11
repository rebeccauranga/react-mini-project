import React from 'react';
import './App.css';
import Home from './Home'
import Timer from './Timer';
import WorkoutTypes from './WorkoutTypes';
import SetsAndReps from './SetsAndReps';
import SavedRoutines from './SavedRoutines';
import {
    Link,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'; 

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state ={
    saved: []
  }
}
render() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/routines" 
        render= {(props) => (
          <SavedRoutines
          {...props}
          routine={this.state.saved}
          />
          )}
        />
      </Switch>
    </div>
      );
}
}


export default App;
