import axios from 'axios';
import { host } from '../../../../config/appConfig'; 

const uploadPhoto = (data) =>
    axios.post(host + '/files', data)
        .then((response) => response.data)
        .catch((error) => error.data);

const postNewRecipe = (action) =>
    axios.post(host + '/api/recipe', action.data)
        .then((response) => response.data)
        .then(() => action.callback())
        .catch((error) => error.data);

export {
    uploadPhoto,
    postNewRecipe
};