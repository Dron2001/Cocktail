import { SESSION_GET_COCKTAILS, SESSION_GET_FILTERS } from './constants'

export const sessionInitialState = {
  cocktails: [],
  filters: [],
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SESSION_GET_COCKTAILS:
      return { ...state, cocktails: payload.drinks }
    case SESSION_GET_FILTERS:
        return { ...state, filters: payload.drinks }
    default:
      return { ...state }
  }
}

