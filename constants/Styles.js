import Colors from './Colors';


export const TextColor = {
  text: {
    color: Colors.textColor,
  },
};
export const SubmitButtonStyle = {
  backgroundColor: Colors.blue,
  marginTop: 15,
  marginLeft: 60,
  marginRight: 60
};
export default {
  SubmitButtonStyle: {
    backgroundColor: Colors.blue,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  NavBar: {
    backgroundColor:Colors.blue
  },
  NavBarText:{
    fontSize: 20,
    color: Colors.white
  },
  GiftedForm: {
    TextInput: {
      rowContainer: { flexDirection: 'column', height: 80 },
      // titleContainer: {flex: 1},
      textInput: { marginLeft: 10 }
    },
    ErrorWidget: {
      errorContainer: { backgroundColor: '#ffc9c9', padding: 10 },
      errorText: { lineHeight: 20 }
    }
  },

}
