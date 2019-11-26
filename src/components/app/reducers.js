import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_STARTED, FETCH_BOOKS_FAILED } from './types'

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload.books,
        loading: false
      }
    case FETCH_BOOKS_STARTED:
      return {
        books: [],
        loading: true
      }
    case FETCH_BOOKS_FAILED:
      return {
        books: [],
        loading: false
      }
    default:
      return state
  }
}