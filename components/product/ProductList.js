import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {
  SearchBar
} from 'react-native-elements';
import Colors from '../../constants/Colors';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    console.log(this.props.data)
    return <View style={styles.container}>
      <SearchBar
        containerStyle ={{backgroundColor: Colors.white1, borderTopWidth: 0,  borderBottomWidth: 0, marginBottom: 5}}
        clearIcon={{ color: '#86939e', name: 'clear' }}
        inputStyle ={{backgroundColor: Colors.white}}
        textInputRef="textInputRef"
        placeholder='Type Here...' />
      <FlatList
        keyExtractor={(item, index) => item}
        data={this.props.data}
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={()=>{}}>
            <ProductItem  {...this.props} key={item} data={item}/>
          </TouchableOpacity>
        }
      >
      </FlatList>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});