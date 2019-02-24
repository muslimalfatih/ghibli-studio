import { FilmsActionTypes } from './types'
import { mergeArray } from '../../utils/mergeArray'
import filmsImage from '../../data/films.json'

const API_BASE = 'https://ghibliapi.herokuapp.com'
const FILM_API = `${API_BASE}/films`

export function fetchFilms() {
  return function(dispatch: any) {
    return fetch(FILM_API)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('There is something wrong')
        }
      })
      .then(films => {
        dispatch(filmsDispatch(films))
      })
      .catch((error: string) => {
        console.error(error)
      })
  }
}

const filmsDispatch = (films: any) => ({
  type: FilmsActionTypes.FETCH_FILMS,
  payload: mergeArray(films, filmsImage, 'id')
})