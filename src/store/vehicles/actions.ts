import { VehiclesActionTypes } from './types'
import { mergeArray } from '../../utils/mergeArray'
import vehiclesImage from '../../data/vehicles.json'

const API_BASE = 'https://ghibliapi.herokuapp.com'
const VEHICLES_API = `${API_BASE}/vehicles?limit=10`

export function fetchVehicles() {
  return function(dispatch: any) {
    return fetch(VEHICLES_API)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('There is something wrong')
        }
      })
      .then(vehicles => {
        dispatch(vehiclesDispatch(vehicles))
      })
      .catch((error: string) => {
        console.error(error)
      })
  }
}

const vehiclesDispatch = (vehicles: any) => ({
  type: VehiclesActionTypes.FETCH_VEHICLES,
  payload: mergeArray(vehicles, vehiclesImage, 'id')
})