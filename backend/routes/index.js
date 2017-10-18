module.exports = (router) => {
    router.use('/recipe', require('./recipe/recipeRoutes'));
};