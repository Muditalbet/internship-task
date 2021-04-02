import {combineReducers} from  'redux';
import ContentReducer from './ContentReducer';
import BucketReducer from './BucketReducer';

const allReducers = combineReducers({
    content: ContentReducer,
    bucket: BucketReducer
})
export default allReducers