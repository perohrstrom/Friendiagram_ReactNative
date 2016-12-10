import { combineReducers } from 'redux';
import locationPoints from './locationPoints'
import midpoint from './midpoint'
import venues from './venues'

const indexReducer = combineReducers({ locationPoints, midpoint, venues })

export default indexReducer
