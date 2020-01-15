import { combineReducers } from 'redux'

import posts from './posts.js'
import page from './page.js'

const rootReducers = combineReducers({
    posts,
    page
});


export default rootReducers;