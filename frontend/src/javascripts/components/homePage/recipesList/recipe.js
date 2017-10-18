import React, { Component} from 'react';
import { Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router';
import { host } from '../../../../../config/appConfig';
// import recipe from '../../../../images/new-recipe.png';

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
    }
    onMouseLeaveHandler = () =>{
        this.setState({
            hover: false
        })
    }

    render() {
        const { recipe } = this.props;
        return (
            <div className ='single-recipe-wrapper'
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >
                    <Image src={ recipe.photo ? `${host}/files/${recipe.photo}`: '../../../../images/new-recipe.png'}
                    size='medium'
                    />
                <div className={this.state.hover ? 'none' : 'recipe-title'}>{recipe.title}</div>
                <div className={this.state.hover ? 'recipe-details' : 'none' }>See Details</div>

            </div>
        )
    }
}

export default SingleRecipe