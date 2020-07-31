import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApptList from './components/ApptList';
import Appt from './components/Appt';



class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ApptList}></Route>
          <Route exact path='/appts/:apptId' component={Appt}></Route>
        </Switch>
      </Router>


    )
  }
}

export default App;
