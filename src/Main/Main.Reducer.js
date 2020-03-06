import { select } from 'redux-saga/effects';
import {
  GET_LIST_AIL,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
} from './Main.Action';

const initialState = { fetching: false, data: null, err: null };

export const getList = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_LIST_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_LIST_AIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
