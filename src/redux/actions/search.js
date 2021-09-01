export const SET_SEARCH = 'SET_SEARCH'

export function actionSetSearch(text) {
    return {
        type: SET_SEARCH,
        text
    }
}