import React from 'react';

import './config/ReactotronConfig'
import Routes from './routes'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const styles = StyleSheet.create({
  body:{
    backgroundColor: '#7159c1'
  },
   sectionTitle: {
    fontSize: 59,
    fontWeight: '600',
    color: '#fff',
  }
});

const App = ()=>{
  return (
    <Routes />
  );
};


export default App;



