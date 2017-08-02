import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
  ScrollView,
  Platform
} from 'react-native';

import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

import MenuItem from './MenuItem';


class SideBar extends Component {
  
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      email: '',
      avatarUrl: '',
      isShowMenuAdmin: false
    };
    
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        
        <MenuItem text='Feed' icon='home'/>
        <MenuItem text='Warehouse management' icon='store'/>
        <MenuItem text='Shipper management' type='ionicon' icon='ios-people'/>
        <MenuItem text='Delivery management' icon='truck-delivery'/>
        <MenuItem text='Statistic' type='font-awesome' icon='pie-chart'/>
        <MenuItem text='Donate for developer' type='entypo' icon='credit-card'/>
      
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 40
  }
});

//make this component available to the app
export default SideBar;
