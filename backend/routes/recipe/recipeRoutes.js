const router = require('express').Router();
const recipeRepository = require('../../repositories/recipe/recipeRepository');

router.get('/', (request, response) => {
    recipeRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get recipes list. ${error}`));
});

router.get('/:id', (request, response) => {
    recipeRepository.getById(request.params.id)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get recipe. ${error}`));
});

router.post('/', (request, response) => {
    recipeRepository.add(request.body)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(400).send(`Can not recipe. ${error}`));
});

router.put('/:id', (request, response) => {
    recipeRepository.updateRecipe(request.params.id, request.body)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(400).send(`Can not recipe. ${error}`));
});


module.exports = router;