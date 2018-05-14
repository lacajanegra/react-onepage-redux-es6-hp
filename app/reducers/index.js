import {combineReducers} from 'redux';
import * as types from '../actions/types';

const initialState = {data: {}};

const omen = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    omen
});

export default rootReducer;
