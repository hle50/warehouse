import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import Colors from '../../constants/Colors';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {text, icon, type} = this.props;
    return (
      
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row',}}>
          <View style={styles.icon}>
            <Icon
              containerStyle={{alignItems: 'flex-start'}}
              size={30}
              name={icon}
              type={!type ? 'material-community' : type}
              color={Colors.blue}
            /></View>
          <View style={styles.textWrapper}><Text style={styles.text}>{text}</Text></View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomColor: Colors.white2,
    borderBottomWidth: 1
  },
  icon: {
    flex: 0.2,
    justifyContent: 'center',
    paddingLeft: 10
  },
  textWrapper: {
    flex: 0.7,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '400'
  }
  
});