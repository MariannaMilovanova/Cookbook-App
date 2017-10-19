import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { host } from '../../../../config/appConfig';
import recipePic from '../../../images/new-recipe.png';
import FileInput from 'react-file-input';

class RecipePhoto extends Component {
  handleFile = (event) => {
    let hasExtension = (inputID, exts) => {
      return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(event.target.files[0].name);
    }
    const data = new FormData();
    data.append('file', event.target.files[0]);
    if (!hasExtension(event.target.files[0], ['.jpg', '.gif', '.png', '.jpeg'])) {
      alert("Sorry, " + event.target.files[0].name + " is invalid, allowed extensions are: .jpg, .jpeg,  .png, and .gif");
    } else {
      this.props.uploadPhoto(data);
    }
  }

  render() {
    const { newPhoto, currentRecipe } = this.props;
    return (
      <div className='recipe-photo-wrapper'>
        <div className='recipe-photo'>
          <Image src={ newPhoto ? 
                        `${host}/files/${newPhoto}`
                        : currentRecipe ? `${host}/files/${currentRecipe.photo}` : `${recipePic}`}
                size='medium' wrapped className='recipe-photo-img'/>
        </div>
        <form>
           <FileInput name="myImage"
              accept=".png,.gif"
              placeholder="Choose Image"
              className="recipe-image-input"
              onChange={this.handleFile} />
        </form>
      </div>
    );
  }
}

export default RecipePhoto;