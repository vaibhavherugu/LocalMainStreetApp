import * as React from 'react';
import {
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
} from 'react-native';
import WebView from 'react-native-webview';

class PayPal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  //prettier-ignore
  handleResponse = data => {
    if (data.title === 'success') {
      this.setState({showModal: false});
    } else if (data.title === 'cancel') {
      this.setState({showModal: false});
    } else {
      return;
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      //prettier-ignore
      <View style={styles.bg}>
        <Modal
          visible={this.state.showModal}
          onRequestClose={() => this.setState({showModal: false})}>
          <WebView

            source={{uri: 'http://localhost:4000/'}}
            onNavigationStateChange={data => this.handleResponse(data)}
            injectedJavaScript={`document.f1.submit()`}
          />
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({showModal: true})}>
          <Text>Pay with PayPal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 270,
    opacity: 1,
    backgroundColor: '#919191',
    borderRadius: 15,
  },
});

export default PayPal;
