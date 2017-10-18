import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { host } from '../../../../config/appConfig';
import recipe from '../../../images/new-recipe.png';
import FileInput from 'react-file-input';

class RecipePhoto extends Component {
  handleFile = (event) => {
    let hasExtension = (inputID, exts) => {
      return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(event.target.files[0].name);
    }
    const data = new FormData();
    data.append('file', event.target.files[0]);
    if (!hasExtension(event.target.files[0], ['.jpg', '.gif', '.png'])) {
      alert("Sorry, " + event.target.files[0].name + " is invalid, allowed extensions are: .jpg, .png, and .gif");
    } else {
      this.props.uploadPhoto(data);
    }
  }

  render() {
    return (
      <div className='recipe-photo-wrapper'>
        <div className='recipe-photo'>
          <Image src={ this.props.newPhoto ? 
                        `${host}/files/${this.props.newPhoto}`
                        : recipe}
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