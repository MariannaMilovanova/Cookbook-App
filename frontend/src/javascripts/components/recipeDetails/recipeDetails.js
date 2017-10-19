import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';
import logo from './../../../images/cookbook-logo.png';
import './recipeDetails.scss'

let RecipeDetails = (props) => {
  return (
    <div>
        <Link to='/'>
            <div className='logo'>
                <Image src={logo} size='small' />
            </div>
        </Link>
        <div> Welcome to Cookbook Recipes Site! </div>
    </div>
  )
}

export default RecipeDetails