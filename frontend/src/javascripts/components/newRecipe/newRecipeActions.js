export const uploadPhoto = (data) => {
    return {
        type: "UPLOAD_PHOTO",
        data
    };
};

export const addNewRecipe = (data, callback) => {
    return {
        type: "POST_NEW_RECIPE",
        data,
        callback
    }
};
