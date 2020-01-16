import { combineReducers } from 'redux'

import posts from './posts.js'
import page from './page.js'
import post from './post.js'

const rootReducers = combineReducers({
    posts,
    post,
    page
});


export default rootReducers;