import { ENTER_LOCATION } from '../actions/index'

const initialState = []
const locationPoints = (state = initialState, action) => {
  switch(action.type) {
    case ENTER_LOCATION:
      return [
        ...state, action.payload
      ]
    default:
      return state
  }
}

export default locationPoints
