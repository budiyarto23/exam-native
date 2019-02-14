import {
    POST_IMAGE,
    URL_IMAGE
} from './types';

export const inputCaption = (text) => {
    return {
        type: POST_IMAGE,
        payload: text
    };
};

export const inputUrl = (text) => {
    return {
        type: URL_IMAGE,
        payload: text
    };
};