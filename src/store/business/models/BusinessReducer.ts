import {Action, Reducer} from 'redux';
import {Business, BusinessState} from "./business";
import {BUSINESS_BULK_ADD, BUSINESS_GET_BY_ID, BusinessActionTypes} from "./actions";

const defaultState: BusinessState = {
    data: [],
    selectedBusiness: null
};

export const businessReducer: Reducer<BusinessState, Action> = (
    state = defaultState,
    action: BusinessActionTypes
) => {
    switch (action.type) {
        case BUSINESS_BULK_ADD:
            return {
                ...state,
                data: action.data
            };
        case BUSINESS_GET_BY_ID:
            if(!state || !state.data) {
                return state;
            }

            return {
                ...state,
                selectedBusiness: state.data.find((b: Business) => b.id === action.data)
            };
        default:
            return state;
    }
};