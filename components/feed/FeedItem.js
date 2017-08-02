import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class FeedItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {text, number} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.text}>
          <Text>{text}</Text>
        </View>
        <View style={styles.number}>
          <Text>{number}</Text>
        </View>
      </View>
    
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    margin: 10
  },
  text: {
    flex: 0.7
  },
  number: {
    flex: 0.3,
    alignItems: 'flex-end'
  }
});