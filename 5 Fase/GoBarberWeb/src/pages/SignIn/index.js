import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
// Lib para validação
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Insira um email válido'),
  password: Yup.string().required('A senha é obrigatória')
})

export default function SignIn() {
  function handleSubmit(data){
    console.log(data)
  }
  return (
   <>
    <img src={Logo} alt="GoBarber"/>
    <Form onSubmit={handleSubmit} schema={schema}>
      <Input type="email" name="email" id="" placeholder="Seu email"/>
      <Input type="password" name="password" id="" placeholder="Sua senha secreta"/>
      <button type="submit">Acessar</button>
      <Link to="/register">Criar conta gratuíta</Link>
    </Form>
   </>
  );
}
