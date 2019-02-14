import {
    POST_IMAGE
} from '../actions/types';

const INITIAL_STATE = {
    caption: '',
    url: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_IMAGE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
