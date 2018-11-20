import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import List from './List/ListContainer';
import NotFoundPage from './NotFoundPage';

class App extends Component {

  render() {

    return (
      <div className="App container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
