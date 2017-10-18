const router = require('express').Router();
const recipeRepository = require('../../repositories/recipe/recipeRepository');

router.get('/', (request, response) => {
    recipeRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get recipes list. ${error}`));
});

router.post('/', (req, res) => {
    recipeRepository.add(req.body)
    .then((data) => response.status(200).send(data))
    .catch((error) => response.status(400).send(`Can not recipe. ${error}`));
});


module.exports = router;