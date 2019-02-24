import { combineReducers } from 'redux'
import filmsReducer from './films/reducers'
import peoplesReducer from './peoples/reducers'
import locationsReducer from './locations/reducers'
import speciesReducer from './species/reducers'
import vehiclesReducer from './vehicles/reducers'

const rootReducer = combineReducers({
  peoples: peoplesReducer,
  films: filmsReducer,
  locations: locationsReducer,
  species: speciesReducer,
  vehicles: vehiclesReducer
})

export default rootReducer

