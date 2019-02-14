import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import postFormReducer from './PostFormReducer';
import postListReducer from './PostListReducer';

export default combineReducers({
    auth: authReducer,
    form: postFormReducer,
    post: postListReducer
});