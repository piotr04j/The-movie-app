import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import MoviesList from './Lists/MoviesList';
import NotFoundPage from './NotFoundPage';

class App extends Component {

  render() {

    return (
      <div className="App container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies-list/:page" component={MoviesList} />
          <Route path="/tv-list/:page" component={MoviesList} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
