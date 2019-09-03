import React from 'react';

import './config/ReactotronConfig'
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


  console.tron.log('ai');
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bora codar!</Text>
        <Text style={styles.sectionTitle}>E ai</Text>
      </View>
    </View>
  );
};


export default App;



