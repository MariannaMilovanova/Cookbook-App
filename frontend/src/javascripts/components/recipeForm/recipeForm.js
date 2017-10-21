import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Label, TextArea, Input, Button, Container} from 'semantic-ui-react';
import {Link, browserHistory} from 'react-router';
import './recipeForm.scss';

class RecipeFormNew extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <div className='recipe-field-label'>{field.label}</div>
                {field.input.name == 'title' || field.input.name == 'description' ?
                    <Input className='recipe-form-input' fluid
                           {...field.input}
                           type="text"
                    /> :
                    <TextArea className='recipe-form-textarea' autoHeight
                              {...field.input}
                              type="text"
                    />
                }
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }
    onSubmit(values) {
        if (this.props.addNewRecipe) {
            let data = Object.assign({}, values, {photo: this.props.newPhoto});
            return this.props.addNewRecipe(data, () => {
                browserHistory.push('/');
            });
        }
        if (this.props.currentRecipe) {
            let oldData = {...this.props.currentRecipe};
            oldData.modified = new Date();
            let data = Object.assign({}, values,
                {photo: this.props.newPhoto ? this.props.newPhoto : this.props.currentRecipe.photo});
            data.previousVersion = [...oldData.previousVersion];
            oldData.previousVersion = [];
            data.previousVersion.push(oldData);

            return Promise.all([this.props.updateRecipe(this.props.currentRecipe._id, data)])
                .then(() => this.props.exitModifyMode());
        }
    }
    handleCancel = () => {
        if (this.props.addNewRecipe) {
            browserHistory.push('/');
        } else {
            this.props.exitModifyMode();
        }
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <div className='recipe-form-wrapper'>
                <Container className='recipe-form'>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label='Title'
                            name='title'
                            component={this.renderField}
                        />
                        <Field
                            label='Description'
                            name='description'
                            component={this.renderField}
                        />
                        <Field
                            label='Ingredients'
                            name='ingredients'
                            component={this.renderField}
                        />
                        <Field
                            label='Preparation Instructions'
                            name='directions'
                            component={this.renderField}
                        />
                        <div className='recipe-form-btns-wrapper'>
                            <Button type='submit' color='blue' className='recipe-form-btn'>Submit</Button>
                            <Button color='orange' type='button' className='recipe-form-btn'
                                    onClick={this.handleCancel}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a title!"
    }
    if (values.title && values.title.length < 3) {
        errors.title = "Title have to be at least 3 characters!"
    }
    if (!values.description) {
        errors.description = "Enter some description"
    }
    if (!values.ingredients) {
        errors.ingredients = "Please add some ingredients"
    }
    if (!values.directions) {
        errors.directions = "Enter some preparation directions"
    }
    return errors;
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.currentRecipe) {
        return {
            initialValues: {
                title: ownProps.currentRecipe.title,
                description: ownProps.currentRecipe.description,
                ingredients: ownProps.currentRecipe.ingredients,
                directions: ownProps.currentRecipe.directions
            }
        }
    } else {
        return {}
    }
};

let RecipeForm = reduxForm({
    validate,
    form: "RecipeFormNew"
}, mapStateToProps)(RecipeFormNew);
export default (connect(mapStateToProps)(RecipeForm))
