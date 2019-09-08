import React, { Component} from 'react';
import PropTypes from 'prop-types'
import {ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {
  Container,
  Header,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Avatar
 } from './styles';



export default class User extends Component {
  /**
   * Para conseguir colocar uma variavel no
   * método static eu preciso cria uma funcao que retorna
   */
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  })

  static propTypes ={
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  }

  state = {
    stars:[],
    loading: false
  }

  async componentDidMount(){
    const { navigation } = this.props
    const user = navigation.getParam('user')
    this.setState({loading:true})
    const response = await api.get(`/users/${user.login}/starred`)

    console.log(response.data)
    this.setState({stars: response.data, loading: false})
  }

  render(){
    const { stars } = this.state
    const {navigation} = this.props
    const user = navigation.getParam('user')

    return (
      <Container >
         <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
         </Header>
         {this.state.loading? <ActivityIndicator color='#111'/>: null}
         <Stars
          data={stars}
          keyExtractor={star=> String(star.id)}
          renderItem={({item})=>(
            <Starred>
              <OwnerAvatar source={{uri: item.owner.avatar_url}}/>
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
          />

      </Container>
    );
  }

}
