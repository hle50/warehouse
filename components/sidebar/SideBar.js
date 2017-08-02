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
import {
  Avatar,
  Icon
} from 'react-native-elements';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

import MenuItem from './MenuItem';


class SideBar extends Component {
  
  constructor(props) {
    super();
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        
        <MenuItem {...this.props} text='Feed' name='Home' icon='home'/>
        <MenuItem {...this.props} text='Warehouse management' icon='store' name='Product'/>
        <MenuItem {...this.props} text='Shipper management' type='ionicon' icon='ios-people'/>
        <MenuItem {...this.props} text='Delivery management' icon='truck-delivery'/>
        <MenuItem {...this.props} text='Statistic' type='font-awesome' icon='pie-chart'/>
        <MenuItem {...this.props} text='Donate for developer' type='entypo' icon='credit-card'/>
        
        <View style={styles.avatar}>
          <View>
            <Avatar
              medium
              rounded
              title="BP"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20}}>
            <Text>Bich Phuong</Text>
            <Icon
              containerStyle={{alignItems: 'center'}}
              name='md-log-out'
              type='ionicon'
              size={30}
              color={Colors.blue}
            />
          </View>
        
        
        </View>
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
  },
  avatar: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10
  }
});

//make this component available to the app
export default SideBar;
