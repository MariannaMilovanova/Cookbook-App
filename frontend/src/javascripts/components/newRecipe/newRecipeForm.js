import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Label, TextArea, Input, Button, Container } from 'semantic-ui-react';
import { Link, browserHistory } from 'react-router';
import './newRecipe.scss'

class NewRecipeFrom extends Component {
  renderField(field){
    const { meta: {touched, error} } = field;
    const className = `${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <div className='recipe-field-label'>{field.label}</div>
        { field.input.name == 'title' || field.input.name =='description' ? 
          <Input className = 'recipe-form-input' fluid
            {...field.input}
            type="text"
          /> :
          <TextArea className = 'recipe-form-textarea' autoHeight
            {...field.input}
            type="text"
          />
        }
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    )
  }
  onSubmit(values){
    let data = Object.assign({}, values, {photo: this.props.newPhoto}) 
    this.props.addNewRecipe(data, () => {
      browserHistory.push('/');;
    });
  }
  render(){
    const { handleSubmit } = this.props;
    return(
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
              <Link to='/'>
                <Button type='submit' color='orange' className='recipe-form-btn'>Cancel</Button>
              </Link>
            </div>
          </form>
        </Container>
      </div>
    )
  }
}

function validate(values){
  const errors = {};
  if(!values.title) {
    errors.title = "Enter a title!"
  }
  if(values.title && values.title.length < 3) {
    errors.title = "Title have to be at least 3 characters!"
  }
  if(!values.description) {
    errors.description = "Enter some description"
  }
  if(!values.ingredients) {
    errors.ingredients = "Please add some ingredients"
  }
  if(!values.directions) {
    errors.directions = "Enter some preparation directions"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "ReceipesNewForm"
})(NewRecipeFrom)
