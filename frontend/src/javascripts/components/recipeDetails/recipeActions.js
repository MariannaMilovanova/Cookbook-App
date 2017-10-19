export const fetchRecipe = (id) => {
    return {
        type: "FETCH_RECIPE",
        id
    };
};

export const exitModifyMode = () => {
    return {
        type: "EXIT_MODIFY_MODE",
    };
};

export const updateRecipe = (id, data) => {
    return {
        type: "UPDATE_RECIPE",
        id,
        data,
        //callback
    }
};
