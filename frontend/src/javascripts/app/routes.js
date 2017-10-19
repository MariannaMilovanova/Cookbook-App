import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import NewRecipe from '../components/newRecipe/newRecipe';
import App from './App';
import StartPage from '../components/StartPage';
import RecipeDetails from '../components/recipeDetails/recipeDetails'
import NotFound from '../components/notFound/notFound';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={StartPage}/>
        <Route path="/recipe/:id" component={RecipeDetails}/>
        <Route path="/recipe" component={NewRecipe}/>
        <Route path="404" component={NotFound}/>
        <Redirect from="*" to="404"/>
    </Route>
);