import Reactotron from 'reactotron-react-native';

if(__DEV__){
  console.log('rodando o tron')
  const tron = Reactotron
  .configure({host:'192.168.0.7'}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

  console.tron = tron
  tron.clear()
}
