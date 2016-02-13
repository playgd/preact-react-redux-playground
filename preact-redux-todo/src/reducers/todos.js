'use strict'

const todo = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(item => {
        if(item.id === action.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
  }
  return state
}

export default todo
