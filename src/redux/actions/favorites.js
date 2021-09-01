export function actionSaveRecipe(recipe) {
    return {
        type: 'SAVE_RECIPE',
        recipe
    }
}

export function actionRemoveRecipe(recipe) {
    return {
        type: 'REMOVE_RECIPE',
        recipe
    }
}