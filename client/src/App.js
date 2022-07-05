import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage'
import RecipeCreator from './components/RecipeCreator/RecipeCreator'
import Home from './components/Home/Home'
import RecipeDetail from './components/RecipeDetail/RecipeDetail'
import NavBar from "./components/NavBar/NavBar";
import NotFound from './components/NotFound/NotFound'

import './App.css';

function App() {
  return (
    <div className={'App'}>
      <Router>
        
        <Route path='/home' component={NavBar}/>
        <Route path='/recipe' component={NavBar}/>
        <Switch>
          <Route exact path={'/'} component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/recipe/details/:id' component={RecipeDetail}/>
          <Route exact path='/recipe/create' component={RecipeCreator}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;