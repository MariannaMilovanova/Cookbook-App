require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Recipe = require('../../schemas/recipe/recipeSchema');


class RecipeRepository extends Repository {
    constructor() {
        super();
        this.model = Recipe;
    }

    
    updateRecipe(id, data) {
        this.model.findById(id)
        .then((recipe) => {
            recipe.previousVersion = [];
            recipe.modified = new Date()
            return this.model.findByIdAndUpdate(id,
                {$push: {"previousVersion": recipe}},
                {new: true})
        })
        return this.model.findOneAndUpdate(
            { _id: id },
            { $set: { "title": data.title, 
                    "description": data.description,
                    "photo": data.photo,
                    "ingredients": data.ingredients,
                    "directions": data.directions,
                    }
            },
            { returnNewDocument: true }
        )
        .then(() => this.model.findById(id))
    }
}

module.exports = new RecipeRepository();