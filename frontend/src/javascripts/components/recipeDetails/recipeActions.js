export const fetchRecipe = (id) => {
    return {
        type: "FETCH_RECIPE",
        id
    };
};

export const updateRecipe = (id, data, callback) => {
    return {
        type: "UPDATE_RECIPE",
        id,
        data,
        callback
    }
};
