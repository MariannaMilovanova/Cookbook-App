import axios from 'axios';
import { host } from '../../../../config/appConfig'; 

const getRecipe = (id) =>
    axios.get(host + '/api/recipe/' + id)
        .then((response) => response.data)
        .catch((error) => error.data);

const updateRecipe = (action) =>
    axios.put(host + '/api/recipe/' + action.id, action.data)
        .then((response) => response.data)
        .catch((error) => error.data);

export {
    getRecipe,
    updateRecipe
};