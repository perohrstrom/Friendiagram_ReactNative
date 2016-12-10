import { HANDLE_MIDPOINT } from '../actions/index'

const initialState = []
const midpoint = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_MIDPOINT:
      return action.payload
    default:
      return state
  }
}

export default midpoint
