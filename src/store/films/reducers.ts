import { FilmsActionTypes } from './types'

const initialState: any = {
  data: []
}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case FilmsActionTypes.FETCH_FILMS:
      return {...state, data: action.payload}
    default:
      return state
  }
}