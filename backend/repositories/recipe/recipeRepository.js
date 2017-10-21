require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Recipe = require('../../schemas/recipe/recipeSchema');


class RecipeRepository extends Repository {
    constructor() {
        super();
        this.model = Recipe;
    }
}

module.exports = new RecipeRepository();