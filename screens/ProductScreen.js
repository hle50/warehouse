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
import ProductMenu from '../components/product/ProductMenu';
import ProductList from '../components/product/ProductList';
export default class ProductScreen extends Component {
  static navigationOptions = (props) => {
    return {
      headerTitle: 'Products',
      headerTitleStyle: {...Styles.NavBarText},
      headerStyle: {...Styles.NavBar},
      headerLeft: <DrawerButton {...props} />,
      headerRight: <ProductMenu {...props}/>
    }
  };
  constructor(props){
    super(props);
  }
  
  
  render(){
    
    return <View style={styles.container}>
     <ProductList data={[1,2,3,45,4,75,95,55,]}/>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
});