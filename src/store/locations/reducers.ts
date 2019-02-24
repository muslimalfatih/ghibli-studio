import { LocationsActionTypes } from './types'

const initialState: any = {
  data: []
}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case LocationsActionTypes.FETCH_LOCATIONS:
      return {...state, data: action.payload}
    default:
      return state
  }
}