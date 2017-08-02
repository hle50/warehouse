import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import Menu, {MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
import Colors from '../../constants/Colors';

export default class ProductMenu extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View>
        
        <Menu>
          <MenuTrigger>
            <Icon
              iconStyle={{marginRight: 5}}
              size={30}
              name='dots-vertical'
              type='material-community'
              color={Colors.white}
            />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={styles.menu}>
            <MenuOption style={[styles.menuItem, styles.border]}>
              <Text style={[styles.menuText]}>Add new product</Text>
            </MenuOption>
            <MenuOption style={styles.menuItem}>
              <Text style={styles.menuText}>Create package</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    
    )
  }
}
const styles = StyleSheet.create({
  menuItem: {
    padding: 15,
    marginLeft: 10
  },
  border: {
    borderColor: Colors.white2,
    borderBottomWidth: 1
  },
  menuText: {
    color: Colors.blue
  },
  menu: {
    backgroundColor: Colors.white,
    marginTop: 30,
    marginRight: 15,
    borderWidth: 0.5,
    borderColor:Colors.white2
  }
});