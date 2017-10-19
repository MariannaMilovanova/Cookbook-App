import React, { Component } from 'react';
import { Image, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchRecipe } from './recipeActions';
import { host } from '../../../../config/appConfig';
import ModifyRecipe from './modifyRecipe';
import recipePic from '../../../images/new-recipe.png';
import logo from './../../../images/cookbook-logo.png';
import './recipeDetails.scss'

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modify: false
        }
    }
    componentDidMount() {
        this.props.fetchRecipe(this.props.params.id);
    }
    render() {
        const{ currentRecipe } = this.props;
        if(!currentRecipe ) {
            return <div className='loading'>Loading...</div>
        }
        return (
            <div className='recipe-details-wrapper'>
                <div className='logo-wrapper'>
                    <Link to='/'>
                        <div className='logo'>
                            <Image src={logo} size='small' />
                        </div>
                    </Link>
                </div>
                {this.state.modify 
                    ? <ModifyRecipe currentRecipe={currentRecipe}/>
                    : <Container textAlign='center' className='recipe-details-container'>
                    <Button onClick={()=>this.setState({modify:true})}>Modify</Button>
                    <div className='recipe-details-header'>{currentRecipe.title}</div>
                    <div className='recipe-details-content'> 
                        <div className='recipe-details-image'>
                            <Image src={ currentRecipe.photo ? 
                                `${host}/files/${currentRecipe.photo}`
                                : `${recipePic}`}
                                size='medium' wrapped
                            />
                        </div>
                        <div className='recipe-details-date'>
                            {currentRecipe.createdAt}
                        </div>
                        <div className='recipe-details-description'>
                            {currentRecipe.description}
                        </div>
                        <div className='recipe-details-ingredients'>
                            {currentRecipe.ingredients}
                        </div>
                        <div className='recipe-details-instruction'>
                            {currentRecipe.directions}
                        </div>

                    </div>
                </Container>}

            </div>
      )
    }
}


const mapStateToProps = (state) => {

    return ({
        currentRecipe: state.recipeDetails.currentRecipe
    })
}

const mapDispatchToProps = {
    fetchRecipe: fetchRecipe   
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeDetails);