import React from 'react';
import {Link} from 'react-router-dom';
import Notifications from '~/components/Notifications';
import Logo from '~/assets/logoColorida.svg';
import {Container, Content, Profile } from './styles';

export default function Header(){
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Logo"/>
          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>
        <aside>
        <Notifications/>
          <Profile>
            <div>
              <strong>Ismael Moreira</strong>
              <Link to='/profile'>Meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Ismael Moreira"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
