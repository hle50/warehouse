import React, {Component} from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native'
import {
  Icon
} from 'react-native-elements';
import Colors from '../../constants/Colors';
export default class DrawerButton extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
   return (
     <TouchableOpacity onPress={() => {
       this.props.navigation.navigate('DrawerOpen');
     }}>
       <Icon
         iconStyle={{marginLeft: 15}}
         size={30}
         name='menu'
         color={Colors.white}
       />
     </TouchableOpacity>
   )
   

  }
}