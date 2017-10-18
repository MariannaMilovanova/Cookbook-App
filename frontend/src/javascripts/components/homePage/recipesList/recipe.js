import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

const SingleRecipe = (props) => {
  return (
    <div className ='single-recipe-wrapper'>
        <div className='receipe-title'>My first recipe</div>
        <div className='receipe-description'>Short description: Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
            sem. Nulla consequat massa quis enim. </div>
    </div>
  )
}

export default SingleRecipe