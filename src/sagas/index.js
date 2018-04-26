import { helloSaga } from "./hello-saga";
import { takeEvery } from "redux-saga/effects";

export default function* watcherSaga(action) {
  yield [takeEvery("SOME_ACTION", helloSaga)];
}
