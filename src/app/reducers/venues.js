import { SELECT_VENUE } from '../actions/index'

const initialState = []
const venues = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_VENUE:
      return Object.assign([], state, [
        ...state,
        action.payload
      ])
    default:
      return state
  }
}

export default venues
