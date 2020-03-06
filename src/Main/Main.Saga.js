import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  GET_LIST_REQUEST,
  getListFail,
  getListSuccess,
} from './Main.Action';
import { getList } from '../api';
import { sendNetworkFail } from '../actions';

export function* watchGetList() {
  yield takeLatest(GET_LIST_REQUEST, handleGetList);
}

function* handleGetList(action) {
  const { page } = action.payload
  const response = yield call(getList, page);


  const test = yield select()
  console.log('test', test)
  if (response.ok) {
    yield put(getListSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getListFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getListFail(response.problem));
    }
  }
}
