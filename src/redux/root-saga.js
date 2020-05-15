import { all, call } from 'redux-saga/effects';

import { fetchCollectionStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSage() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
