import axios from 'axios';
import { host } from '../../../../config/appConfig'; 

const uploadPhoto = (data) =>
    axios.post(host + '/files', data)
        .then((response) => response.data)
        .catch((error) => error.data);

const postNewRecipe = (data) =>
    axios.post(host + '/api/recipe', data)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    uploadPhoto,
    postNewRecipe
};