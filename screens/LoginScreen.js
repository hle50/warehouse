import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
const frmLogin = 'LoginForm';
export default class LoginScreen extends Component {
  
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  
  login(){
    this.props.navigation.navigate('Main')
  }
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/icon/logo.png')}/>
        </View>
        <GiftedForm
          contentContainerStyle={{
            flex: 1,
            backgroundColor: Colors.white
          }}
          formStyles={{containerView: {backgroundColor: Colors.white}}}
          formName={frmLogin}// GiftedForm instances that use the same name will also share the same states
          //validators={this.formChangePasswordValidators}
          clearOnClose={true}
          scrollEnabled={false}
        >
          <GiftedForm.SeparatorWidget/>
          <GiftedForm.TextInputWidget
            widgetStyles={{
              rowContainer: [styles.border]
            }}
            name='email' // mandatory
            placeholder={'Email'}
            secureTextEntry={true}
            clearButtonMode='while-editing'
          />
    

    
          <GiftedForm.SeparatorWidget/>
    
          <GiftedForm.TextInputWidget
            widgetStyles={{
              rowContainer: [styles.border]
            }}
            name='password' // mandatory
            //title={`${I18n.t(Strings.CONFIRM_PASSWORD)}`}
            placeholder={'Password'}
            secureTextEntry={true}
            clearButtonMode='while-editing'
          />
    
          <GiftedForm.SeparatorWidget/>
    
          <GiftedForm.SubmitWidget
            title='Login'
            widgetStyles={{
              submitButton: Styles.SubmitButtonStyle
            }}
            onSubmit={this.login}
          />
          <GiftedForm.ErrorsWidget widgetStyles={Styles.GiftedForm.ErrorWidget}/>
        </GiftedForm>
      </KeyboardAwareScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10
  },
  logo: {
    width: 180,
    height: 180
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.white1
  }
  
});
