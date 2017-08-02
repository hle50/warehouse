import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  Avatar
} from 'react-native-elements';
import Colors from '../../constants/Colors';

export default class ProductItem extends Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    
    return <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          large
          source={require('../../assets/images/cookie.jpg')}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
      <View style={styles.detail}>
        <Text style={[styles.text, styles.textHeader]}>Cookie</Text>
        <Text style={styles.text}>Price:20</Text>
        <Text style={styles.text}>Available:20</Text>
      </View>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 10,
    borderWidth:1,
    borderColor: Colors.white2,
    marginBottom:10,
    marginLeft:10,
    marginRight:10
  },
  avatar:{
    flex:0.3
  },
  detail:{
    flex:0.7,
    paddingLeft: 15,
    justifyContent: 'space-between'
  },
  text:{
    justifyContent: 'center'
  },
  textHeader:{
    fontWeight: '600'
  }
});