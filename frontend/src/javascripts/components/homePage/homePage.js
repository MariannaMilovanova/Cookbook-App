import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { getAllRecipes } from './homeActions';
import { connect } from 'react-redux';
import RecipesList from './recipesList/recipesList';
import PropTypes from 'prop-types';
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
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        recipes: state.homePageStore.recipes
    });
};

const mapDispatchToProps = {
    getAllRecipes
 };

HomePage.propTypes = {
    recipes: PropTypes.array.isRequired,
    getAllRecipes: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);