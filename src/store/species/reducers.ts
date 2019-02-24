import { SpeciesActionTypes } from './types'

const initialState: any = {
  data: []
}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case SpeciesActionTypes.FETCH_SPECIES:
      return {...state, data: action.payload}
    default:
      return state
  }
}