import { all } from 'redux-saga/effects';

import Cart from './cart/sagas';

export default function* rootSaga(){
  return yield all([
    Cart,
  ])
}
