import {all} from 'redux-saga/effects';
import { watchGetList } from './Main/Main.Saga';

export default function* rootSaga() {
  yield all([watchGetList()]);
}
