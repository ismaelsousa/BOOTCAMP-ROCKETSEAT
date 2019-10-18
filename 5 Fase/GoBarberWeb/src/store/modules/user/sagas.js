import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';
import {toast} from 'react-toastify';


import { updateProfileSuccess,updateProfileFailure } from './actions'
export function* updateProfile({payload}){
  try{
    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = Object.assign(
      {name,email,avatar_id},
      rest.oldPassword ? rest:{}
    );
    const response = yield call(api.put,'users', profile);
    toast.success('Perfil atualizado com  sucesso');

    yield put(updateProfileSuccess(response.data));
  }catch(error){
    toast.error('Erro ao atalizar perfil')
    yield put(updateProfileFailure());
  }

}
export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
