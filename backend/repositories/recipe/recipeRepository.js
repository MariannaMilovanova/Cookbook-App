require('../../db/dbConnect');
const Repository = require('../generalRepository');
const Recipe = require('../../schemas/recipe/recipeSchema');


class RecipeRepository extends Repository {
    constructor() {
        super();
        this.model = Recipe;
    }

    getAll() {
        return this.model.find();
    }
    add(data) {
        return new this.model(data).save();
    }

    // getMaps() {
    //     return this.model.find();
    // }

    // addInitialMap() {
    //     return new this.model({}).save();
    // }

    // saveMarkers(mapId, markers) {
    //     return this.model.findByIdAndUpdate(
    //         mapId,
    //         { $set: {userMarkers: markers}},
    //         { new: true }
    //     );
    // }

    // addMarkersToMap(markers) {
    //     return this.model.findByIdAndUpdate(
    //         baseId,
    //         {'$push': {tables: tableId}},
    //         {'new': true}
    //     );
    // }
}

module.exports = new RecipeRepository();