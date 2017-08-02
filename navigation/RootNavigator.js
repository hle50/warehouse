import React from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import SideBar from '../components/sidebar/SideBar';
import ProductScreen from '../screens/ProductScreen';

const LoginStack = StackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  // SignUpScreen: {
  //     screen: SignUpScreen
  // },
  // ForgotPasswordScreen: {
  //     screen: ForgotPasswordScreen
  // }
}, {
  headerMode: 'none'
});

const MainStack = StackNavigator({
  Home: {
    screen: FeedScreen
  },
  
  
}, {
  headerMode: 'screen',
  navigationOptions: {
    gesturesEnabled: false,
    headerBackTitle: null
  }
});
const ProductStack = StackNavigator({
  Product: {
    screen: ProductScreen
  },
  
  
}, {
  headerMode: 'screen',
  navigationOptions: {
    gesturesEnabled: false,
    headerBackTitle: null
  }
});
// const SubmitRequestStack = StackNavigator({
//     SubmitRequest:{
//         screen: SubmitRequestScreen
//     }
// });
// const MakeMyDeskAvailableStack = StackNavigator({
//     MakeMyDeskAvailable:{
//         screen: MakeMyDeskAvailableScreen
//     }
// });
// const MakeMyDeskAvailableDrawer = DrawerNavigator({
//     MakeMyDeskAvailable: {screen: MakeMyDeskAvailableStack},
// },{
//     contentComponent: props => <SideBar navigation={props.navigation}/>
// });
const MainDrawer = DrawerNavigator({
  Home: {screen: MainStack},
  Product: {screen: ProductStack},
}, {
  contentComponent: props => <SideBar navigation={props.navigation}/>
});
// const SubmitRequestDrawer = DrawerNavigator({
//     SubmitRequest: {screen: SubmitRequestStack},
// },{
//     contentComponent: props => <SideBar navigation={props.navigation}/>
// });
// const ProfileStack = StackNavigator({
//     Profile: {
//         screen: ProfileScreen
//     },
//     ChangePassword: {
//         screen: ChangePasswordScreen
//     }
// });
// const ProfileDrawer = DrawerNavigator({
//     Home: {screen: ProfileStack},
// },{
//     contentComponent: props => <SideBar navigation={props.navigation}/>
// });

export default RootNavigator = StackNavigator({
  LoginMain: {
    screen: LoginStack
  },
  Main: {
    screen: MainDrawer
  },
  // Profile: {
  //     screen: ProfileDrawer
  // },
  // SubmitRequest:{
  //     screen: SubmitRequestDrawer
  // },
  // MakeMyDeskAvailable:{
  //     screen: MakeMyDeskAvailableDrawer
  // }
  
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  }
});
