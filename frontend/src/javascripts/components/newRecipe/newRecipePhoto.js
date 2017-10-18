import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import recipe from '../../../images/new-recipe.png';
import FileInput from 'react-file-input';

class RecipePhoto extends Component {
  handleFile = (event) => {
    
    let hasExtension = (inputID, exts) => {
      return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(event.target.files[0].name);
    }
    
    let file = event.target.files[0];
    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('userId', this.props.user._id)

    if (!hasExtension(file, ['.jpg', '.gif', '.png'])) {
      alert("Sorry, " + event.target.files[0].name + " is invalid, allowed extensions are: .jpg, .png, and .gif");
    } else {
      //this.props.handleFile(data);
    }
  }

  render() {
    return (
      <div className='recipe-photo-wrapper'>
        <div className='recipe-photo'>
          <Image src = {recipe}
                size='medium' className='recipe-photo-img'/>
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

export default RecipePhoto

/*src={ this.state.avatar != '' ? 
                        `${AppConfig.host}/files/${this.props.user.avatar}`
                        : avatar}*/