import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_STARTED, FETCH_BOOKS_FAILED } from './types'

export const fetchBooksSuccessAction = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: {
    books,
  },
})

export const fetchBooksStartedAction = () => ({
  type: FETCH_BOOKS_STARTED,
})

export const fetchBooksFailedAction = () => ({
  type: FETCH_BOOKS_FAILED,
})

export default url => dispatch => {
  dispatch(fetchBooksStartedAction())
  fetch(url)
    .then(res => {
      if (res.status !== 200) {
        throw new Error("Call to " + url + " resulted in status code " + res.status);
      }
      return res.json()
    })
    .then(books => {
      dispatch(fetchBooksSuccessAction(books))
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchBooksFailedAction());
    })
}
