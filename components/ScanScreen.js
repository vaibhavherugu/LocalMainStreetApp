'use strict';
import React, { Component } from 'react';

import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera } from 'react-native-camera';
class ScanScreen extends Component {
  onSuccess = e => {
      alert('QR code has been scanned! Redirecting to URL...');
      setTimeout(() => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      }, 1000)
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
  
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={Camera.Constants.FlashMode.auto}
        topContent={
          <Text></Text>
        }
        bottomContent={
          <Text></Text>
        }
      />
           
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#000000'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  background: {
    backgroundColor: "#ffffff",
    // marginBottom: 100
  }
});
export default ScanScreen;