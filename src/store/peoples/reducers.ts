import { PeoplesActionTypes } from './types'

let initialState: any = {
  data: []
}

export default function peoplesReducer(state = initialState, action: any) {
  switch(action.type) {
    case PeoplesActionTypes.FETCH_PEOPLES:
      return {...state, data: action.payload}
    case PeoplesActionTypes.FETCH_DETAIL_PEOPLE:
      // return Object.assign({}, state, action.payload)
      return [...state, action.payload]
    default:
      return state
  }
}