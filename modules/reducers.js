import { SESSION_GET_COCKTAILS, SESSION_GET_FILTERS, SESSION_SET_ACTIVE_FILTERS } from './constants'

export const sessionInitialState = {
  cocktails: [],
  filters: [],
  activeFilters: [],
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SESSION_GET_COCKTAILS:
      const cocktail = state.cocktails.find(i => i.title === payload.name)

      if (cocktail) {
        return { ...state }
      } else {
        return { ...state, cocktails: [ ...state.cocktails, { title: payload.name, data: payload.drinks } ] }
      }
    case SESSION_GET_FILTERS:
      return { ...state, filters: payload.drinks.map(i => i.strCategory) }
    case SESSION_SET_ACTIVE_FILTERS:
      return { ...state, activeFilters: payload }
    default:
      return { ...state }
  }
}

