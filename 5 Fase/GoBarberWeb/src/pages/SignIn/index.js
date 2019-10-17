import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// Lib para validação
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Insira um email válido'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="email" name="email" id="" placeholder="Seu email" />
        <Input
          type="password"
          name="password"
          id=""
          placeholder="Sua senha secreta"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuíta</Link>
      </Form>
    </>
  );
}
