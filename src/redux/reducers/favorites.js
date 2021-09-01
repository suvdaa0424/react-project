export default function favorites(state = [], action) {
    switch (action.type) {
        case 'SAVE_RECIPE':
            return [...state, action.recipe]

        case 'REMOVE_RECIPE':
                return state.filter((recipe) => recipe.id !== action.recipe.id)
        default:
            return state;
    }
}