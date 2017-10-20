import React, { Component } from 'react';
import { Image, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchRecipe, exitModifyMode } from './recipeActions';
import { host } from '../../../../config/appConfig';
import ModifyRecipe from './modifyRecipe';
import recipePic from '../../../images/new-recipe.png';
import logo from './../../../images/cookbook-logo.png';
import '../date/date';
import './recipeDetails.scss';

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
    handleModifyClick = () => {
        // this.setState({showOtherVersion: false})
        this.props.exitModifyMode();
    }
    handleVersionClick = () => {
        this.setState({showOtherVersion: !this.state.showOtherVersion})
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
                            <Image src={logo} size='medium' />
                        </div>
                    </Link>
                </div>
                {this.props.modifyMode
                    ? <ModifyRecipe currentRecipe={currentRecipe} 
                        exitModifyMode={this.props.exitModifyMode}/>
                    : <Container textAlign='center' className='recipe-details-container'>
                        <div className = 'whole-wrapper'> 
                            <div className='recipe-details-header'>{currentRecipe.title}</div>
                            <div className='recipe-details-description'>
                                {currentRecipe.description}
                            </div>
                            <div className='recipe-date'>
                                {`Created: ${new Date(Date.parse(currentRecipe.createdAt)).customFormat( "#MMM# #DD#, #YYYY# #hh#:#mm# #AMPM#" )}`}
                            </div>
                            <div className='recipe-details-content-wrapper'>
                                <div className='recipe-details-image'>
                                    <div className='recipe-image' style={currentRecipe.photo ? 
                                            {backgroundImage: `url(${host}/files/${currentRecipe.photo})`}
                                            :{backgroundImage: `url(${recipePic})`}}>
                                    </div>
                                </div>
                                <div className='recipe-details-content'>
                                    <div className='recipe-details-preparation'>
                                        <div className='header'>Ingredients</div>
                                        <div className='section'>{currentRecipe.ingredients}</div>
                                    </div>
                                    <div className='recipe-details-preparation'>
                                        <div className='header'>Direction</div>
                                        <div className='section'>{currentRecipe.directions}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <Button onClick={this.handleModifyClick} color='green' >Modify</Button>
                    <Button onClick={this.handleVersionClick}  color='orange'>See/Hide previous versions</Button>
                    { this.state.showOtherVersion && 
                        <Header color='brown' as='h2' block>See other verions of {currentRecipe.title}</Header>
                    }
                    {!this.state.showOtherVersion
                        ? <div></div>
                        : currentRecipe.previousVersion[0] 
                        ? currentRecipe.previousVersion.map((version, i) => {
                            return (
                                <div key={i} className = 'whole-wrapper'>
                                    <div className='recipe-details-header'>{version.title}</div>
                                    <div className='recipe-details-description'>
                                        {version.description}
                                    </div>
                                        { version.modified 
                                        ? <div className='recipe-date'>
                                            {`Modified: ${new Date(Date.parse(version.modified)).customFormat( "#MMM# #DD#, #YYYY# #hh#:#mm# #AMPM#" )}`}</div>
                                        : <div></div>}
                                    <div className='recipe-details-content-wrapper'>
                                        <div className='recipe-details-image'>
                                            <div className='recipe-image' style={version.photo ? 
                                                    {backgroundImage: `url(${host}/files/${version.photo})`}
                                                    :{backgroundImage: `url(${recipePic})`}}>
                                            </div>
                                        </div>
                                        <div className='recipe-details-content'>
                                            <div className='recipe-details-preparation'>
                                                <div className='header'>Ingredients</div>
                                                <div className='section'>{version.ingredients}</div>
                                            </div>
                                            <div className='recipe-details-preparation'>
                                                <div className='header'>Direction</div>
                                                <div className='section'>{version.directions}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <div className='no-version'>Unfortunately, no previous version were found</div>
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