import api from '../api'
import { SESSION_GET_COCKTAILS, SESSION_GET_FILTERS } from './constants'

const getCocktailsAction = payload => ({ type: SESSION_GET_COCKTAILS, payload })
const getFiltersAction = payload => ({ type: SESSION_GET_FILTERS, payload })

export const getCocktails = name => dispatch => api.getCocktails(name)
  .then(({ data }) => dispatch(getCocktailsAction(data)))
  .catch(err => console.log('err', err))

export const getFilters = () => dispatch => api.getFilters()
  .then(({ data }) => dispatch(getFiltersAction(data)))
  .catch(err => console.log('err', err))
