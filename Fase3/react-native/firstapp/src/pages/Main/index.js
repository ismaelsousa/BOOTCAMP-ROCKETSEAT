import React from 'react';
import { View, Text } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name='add' size={20} color="#fff"/>
        </SubmitButton>
      </Form>

    </Container>
  );
}

Main.navigationOptions = {
  title:'Usuários'
}
