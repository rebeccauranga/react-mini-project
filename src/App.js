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
          <Route path="/workouts" component={Workouts} />
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
