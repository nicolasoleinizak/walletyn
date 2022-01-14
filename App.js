import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, useColorScheme, Modal} from 'react-native';
import generalStyles from './assets/general-styles.js';

import Main from './components/Main.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <View style={generalStyles.fullContainer}>
        <Main />
        <StatusBar />
      </View>
    );
  }
}

export default App