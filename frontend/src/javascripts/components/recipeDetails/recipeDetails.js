import React, { Component } from 'react';
import { Image, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchRecipe, exitModifyMode } from './recipeActions';
import { host } from '../../../../config/appConfig';
import ModifyRecipe from './modifyRecipe';
import recipePic from '../../../images/new-recipe.png';
import logo from './../../../images/cookbook-logo.png';
import './recipeDetails.scss'

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOtherVersion: false
        }
    }
    componentDidMount() {
        this.props.fetchRecipe(this.props.params.id);
    }
    handleClick = () => {
        this.props.exitModifyMode();
    }
    handleVersionClick = () => {
        this.setState({showOtherVersion: !this.state.showOtherVersion})
    }
    
    render() {
        console.log(this.state)
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
                {this.props.modifyMode
                    ? <ModifyRecipe currentRecipe={currentRecipe} 
                        exitModifyMode={this.props.exitModifyMode}/>
                    : <Container textAlign='center' className='recipe-details-container'>
                    <Button onClick={this.handleClick}>Modify</Button>
                    <Button onClick={this.handleVersionClick}>See/Hide previous versions</Button>
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
                    {this.state.showOtherVersion ?
                     currentRecipe.previousVersion.map((version, i) => {
                        return (
                            <div key={i}>
                            <div className='recipe-details-header'>{version.title}</div>
                            <div className='recipe-details-content'> 
                                <div className='recipe-details-image'>
                                    <Image src={ version.photo ? 
                                        `${host}/files/${version.photo}`
                                        : `${recipePic}`}
                                        size='medium' wrapped
                                    />
                                </div>
                                <div className='recipe-details-date'>
                                    {version.createdAt}
                                </div>
                                <div className='recipe-details-description'>
                                    {version.description}
                                </div>
                                <div className='recipe-details-ingredients'>
                                    {version.ingredients}
                                </div>
                                <div className='recipe-details-instruction'>
                                    {version.directions}
                                </div>
                            </div>
                            </div>
                        )
                     })
                    : <div>Unfortunately, no previous version were found</div>
                    }
                </Container>}
                

            </div>
      )
    }
}


const mapStateToProps = (state) => {

    return ({
        currentRecipe: state.recipeDetails.currentRecipe,
        modifyMode: state.recipeDetails.modifyMode
    })
}

const mapDispatchToProps = {
    fetchRecipe,
    exitModifyMode 
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeDetails);