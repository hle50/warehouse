import React from 'react';
import Expo, {Font} from 'expo';
import {StyleSheet, Text, View} from 'react-native';
import RootNavigator from './navigation/RootNavigator';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false
    }
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf')
    });
    this.setState({appIsReady: true});
  }
  
  render() {
    const {appIsReady} = this.state;
 
      if(appIsReady){
        return  <RootNavigator/>
      }
      return <Expo.AppLoading />
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
