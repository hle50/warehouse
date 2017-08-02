import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import DrawerButton from '../components/navigations/DrawerButton';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import FeedItem from '../components/feed/FeedItem';

export default class FeedScreen extends Component {
  
  static navigationOptions = (props) => {
    return {
      headerTitle: 'Feed',
      headerTitleStyle: {...Styles.NavBarText},
      headerStyle: {...Styles.NavBar},
      headerLeft: <DrawerButton {...props} />
    }
  }
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>Delivery status</Text>
          <FeedItem text='Ready to ship' number="15"/>
          <FeedItem text='Not shipped packages' number="5"/>
          <FeedItem text='Ship error' number="5"/>
        </View>
  
        <View style={styles.wrapper}>
          <Text style={styles.header}>Shipper online</Text>
          <FeedItem text='Yasuo' />
          <FeedItem text='Leesin' />
          <FeedItem text='Riven' />
        </View>
  
        <View style={styles.wrapper}>
          <Text style={styles.header}>Warehouse</Text>
          <FeedItem text='Available' number="15"/>
          <FeedItem text='Not available' number="5"/>
        </View>
        
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 15
  },
  wrapper: {
    borderWidth: 1,
    borderColor: Colors.white2,
    marginBottom: 10
  },
  header: {
    fontWeight: '600',
    fontSize: 15,
    padding: 10
  }
});
