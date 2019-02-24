import { VehiclesActionTypes } from './types'

const initialState: any = {
  data: []
}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case VehiclesActionTypes.FETCH_VEHICLES:
      return {...state, data: action.payload}
    default:
      return state
  }
}