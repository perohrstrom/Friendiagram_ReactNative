export const HANDLE_MIDPOINT = 'HANDLE_MIDPOINT'
export const handleMidpoint = () => {
  return {
    type: HANDLE_MIDPOINT,
    paylaod: "hello"
  }
}


export const SELECT_VENUE = 'SELECT_VENUE'
export const selectVenue = (venue) => {
  return {
    type: SELECT_VENUE,
    payload: venue
  }
}


export const ENTER_LOCATION = 'ENTER_LOCATION'
export const enterLocation = (location) => {
  return {
    type: ENTER_LOCATION,
    paylaod: location
  }
}
