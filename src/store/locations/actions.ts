import { LocationsActionTypes } from './types'
import { mergeArray } from '../../utils/mergeArray'
import locationImage from '../../data/locations.json'

const API_BASE = 'https://ghibliapi.herokuapp.com'
const LOCATIONS_API = `${API_BASE}/locations?limit=10`

export function fetchLocations() {
  return function(dispatch: any) {
    return fetch(LOCATIONS_API)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('There is something wrong')
        }
      })
      .then(locations => {
        dispatch(locationsDispatch(locations))
      })
      .catch((error: string) => {
        console.error(error)
      })
  }
}

const locationsDispatch = (locations: any) => ({
  type: LocationsActionTypes.FETCH_LOCATIONS,
  payload: mergeArray(locations, locationImage, 'id')
})