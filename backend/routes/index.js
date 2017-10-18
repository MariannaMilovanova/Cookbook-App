module.exports = (router) => {
    router.use('/recipe', require('./recipe/recipeRoutes'));
    //router.use('/files', require('./uploadFiles/uploadRoutes'));
};