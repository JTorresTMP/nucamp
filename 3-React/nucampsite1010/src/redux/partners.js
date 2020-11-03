import { PARTNERS } from '../shared/partners'
import * as ActionTypes from './ActionTypes'

export const Partners = (state = PARTNERS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARTNERS:
            return state;
        case ActionTypes.PARTNERS_LOADING:
            return state;
        case ActionTypes.PARTNERS_FAILED:
            return state;
        default:
            return state;
    }
}