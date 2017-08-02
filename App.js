import React from 'react';
import Expo, {Font} from 'expo';
import {StyleSheet, Text, View} from 'react-native';
import Menu, {MenuContext} from 'react-native-menu';
import RootNavigator from './navigation/RootNavigator';
import Colors from  './constants/Colors';

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
    
    if (appIsReady) {
      return (
        <MenuContext style={{flex: 1, backgroundColor: Colors.white}}>
          <RootNavigator/>
        </MenuContext>)
    }
    return <Expo.AppLoading/>
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
