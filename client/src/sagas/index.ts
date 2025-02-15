import { createBook, fetchBooks, removeBook, fetchBook, startStoppableRequest } from './sagas';
import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { CREATE_BOOK, FETCH_BOOK, FETCH_BOOKS, REMOVE_BOOK } from '../actions/book-actions';

export function* rootSaga() {
  yield all([
    takeLatest(FETCH_BOOKS, fetchBooks),
    takeEvery(CREATE_BOOK, createBook),
    takeEvery(REMOVE_BOOK, removeBook),
    //takeEvery(FETCH_BOOK, fetchBook),
    takeEvery(FETCH_BOOK, startStoppableRequest),
  ]);
}
