'use strict'
import { createStore } from 'redux'
import todo from './reducers/todo'

const store = createStore(todo)

export default store
