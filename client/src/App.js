import React from "react";
import {Route} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage'
import RecipeCreator from './components/RecipeCreator/RecipeCreator'
import Home from './components/Home/Home'
import RecipeDetail from './components/RecipeDetail/RecipeDetail'

import NavBar from "./components/NavBar/NavBar";

import './App.css';



function App() {
  return (
    <div className={'App'}>

        <Route exact path={'/'} component={LandingPage}/>

        <Route path='/home' component={NavBar}/>
        <Route exact path='/home' component={Home}/>

        <Route path='/recipe/details/:id' component={NavBar}/>
        <Route path='/recipe/details/:id' component={RecipeDetail}/>

        <Route path='/recipe/create' component={NavBar}/>
        <Route exact path='/recipe/create' component={RecipeCreator}/>

    </div>
  );
}

export default App;