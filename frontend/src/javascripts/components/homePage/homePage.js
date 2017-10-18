import React, { Component } from 'react';
import Header from './header/header';
import { getAllRecipes } from './homeActions';
import { connect } from 'react-redux';
import RecipesList from './recipesList/recipesList'
import './home.scss';

class HomePage extends Component {
    componentDidMount() {
        this.props.getAllRecipes();
    }
    render() {
        return (
            <div className = "home-page-wrapper">
                <Header />
                <RecipesList recipes={this.props.recipes}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        recipes: state.homePageStore.recipes
    })
}

const mapDispatchToProps = {
    getAllRecipes
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);