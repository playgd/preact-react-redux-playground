'use strict'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { selectSubreddit, fetchPosts } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const initialState = {
  postsBySubreddit: {
    ferdi: {}
  },
  selectedSubreddit: 'ferdi'
}

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

store.dispatch(selectSubreddit('html'))
store.dispatch(fetchPostsIfNeeded('html')).then(() => {
  console.log(store.getState())
})
