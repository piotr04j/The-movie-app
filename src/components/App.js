import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MoviesList from './MoviesList';
import NotFoundPage from './NotFoundPage';



class App extends Component {

  render() {

    return (
      <div className="App container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies-list" component={MoviesList} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
