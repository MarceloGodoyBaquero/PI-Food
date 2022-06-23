import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import RecipeCreator from './components/RecipeCreator/RecipeCreator'
import Home from './components/Home/Home'
import RecipeDetail from './components/RecipeDetail/RecipeDetail'

function App() {
  return (
    <div>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/recipe/details/:id' component={RecipeDetail}/>
        <Route exact path='/recipe/create' component={RecipeCreator}/>
    </div>
  );0
}

export default App;
