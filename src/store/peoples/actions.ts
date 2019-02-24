import { PeoplesActionTypes } from './types'
import { mergeArray } from '../../utils/mergeArray'
import peoplesImage from '../../data/peoples.json'

const API_BASE = 'https://ghibliapi.herokuapp.com'
const PEOPLE_API = `${API_BASE}/people?limit=10`

export function peoplesFetchRequest() {
  return function(dispatch: any) {
    return fetch(PEOPLE_API)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('There is something wrong')
        }
      })
      .then(data => {
        dispatch(addFetchPeople(data))
      })
      .catch((error: string) => {
        console.error(error)
      })
  }
}


const addFetchPeople = (data: any) => ({
  type: PeoplesActionTypes.FETCH_PEOPLES,
  payload: mergeArray(data, peoplesImage, 'id')
})

