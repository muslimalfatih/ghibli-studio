import { SpeciesActionTypes } from './types'

const API_BASE = 'https://ghibliapi.herokuapp.com'
const SPECIES_API = `${API_BASE}/species?limit=10`

export function fetchSpecies() {
  return function(dispatch: any) {
    return fetch(SPECIES_API)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('There is something wrong')
        }
      })
      .then(species => {
        dispatch(speciesDispatch(species))
      })
      .catch((error: string) => {
        console.error(error)
      })
  }
}

const speciesDispatch = (species: any) => ({
  type: SpeciesActionTypes.FETCH_SPECIES,
  payload: species
})