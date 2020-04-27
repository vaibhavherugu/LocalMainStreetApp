import * as React from 'react';
import {TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

class SignUpScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
     fname: '',
     lname: '',
     email: '',
     phone: '',
     username: '',
     password: '',
     cpass: '',
     ccardnum: ''
   }
  }

 handlefname = (text) => {
   this.setState({ fname: text })
}
handlelname = (text) => {
   this.setState({ lname: text })
}
handleEmail = (text) => {
   this.setState({ email: text })
}
handlePhone = (text) => {
  this.setState({ phone: text })
}
handleUS = (text) => {
  this.setState({ username: text })
}
handlePW = (text) => {
  this.setState({ password: text })
}
handleCPW = (text) => {
  this.setState({ cpass: text })
}

handleCardNum = (text) => {
  this.setState({ ccardnum: text })
}

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.viewForSearch}>
          <StatusBar barStyle="dark-content" />
          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'First Name'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             onChangeText = {this.handlelname}
          />

          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'Last Name'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             onChangeText = {this.handlelname}
          />

          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'Email'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             onChangeText = {this.handleEmail}
          />

          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'Password'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             secureTextEntry
             onChangeText = {this.handlePW}
          />

          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'Confirm Password'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             secureTextEntry
             onChangeText = {this.handleCPW}
          />

          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'Phone Number'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             onChangeText = {this.handlePhone}
          />

          <TextInput style={styles.input2}
             underlineColorAndroid = "transparent"
             placeholder = 'Card Number'
             placeholderTextColor = "black"
             autoCapitalize = "none"
             onChangeText = {this.handleCardNum}
          />

          <TouchableOpacity style={styles.buttons} onPress={()=>{
              navigate('Buttons')
          }}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsUnderLogin} onPress={()=>{
              navigate('Help')
          }}><Text style={styles.buttonTextForSignUp}>Help</Text></TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input2: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      color: '#000000',
      width: 360,
      borderRadius: 15,
      
   },

   viewForSearch: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
   },

   buttons: {
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:5,
      width: 360,
      opacity: 1,
      backgroundColor: "#000000",
      borderRadius: 15,
  },

  buttonText: {
      color: 'white'
  },

  buttonTextForSignUp: {
    color: '#000000'
  },
  buttonsUnderLogin: {
    margin: 7
  }
    })

export default SignUpScreen;