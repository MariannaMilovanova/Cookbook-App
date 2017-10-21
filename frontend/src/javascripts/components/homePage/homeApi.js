import axios from 'axios';
import { host } from '../../../../config/appConfig'; 

const getRecipes = () =>
    axios.get(host + '/api/recipe')
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    getRecipes
};