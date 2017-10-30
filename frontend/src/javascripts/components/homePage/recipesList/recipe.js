import React, { Component} from 'react';
import { Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router';
import { host } from '../../../../../config/appConfig';
import '../../date/date';
import recipePic from '../../../../images/new-recipe.png';

class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }
    onMouseEnterHandler = () => {
        this.setState({
            hover: true
        })
    };
    onMouseLeaveHandler = () =>{
        this.setState({
            hover: false
        })
    };

    render() {
        const { recipe } = this.props;
        return (
            <Link to={`/recipe/${recipe._id}`}
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler} 
                    style={recipe.photo ? {backgroundImage: `url(${host}/files/${recipe.photo})`}:{backgroundImage: `url(${recipePic})`}}>           
                    <div className='recipe-date'>created: {new Date(Date.parse(recipe.createdAt)).customFormat("#MMM# #DD#, #YYYY#")}</div>
                    <div className={this.state.hover ? 'none' : 'recipe-title'}>{recipe.title}</div>
                    <div className={this.state.hover ? 'recipe-details' : 'none' }>See Details</div>
            </Link>
        )
    }
}

export default SingleRecipe