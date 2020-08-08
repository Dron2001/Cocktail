import { SESSION_STATE } from './constants'

export const sessionInitialState = {
  cocktails: [],
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SESSION_STATE:
      return state
    default:
      return state
  }
}

