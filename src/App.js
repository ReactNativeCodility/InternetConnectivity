import React, { Component } from 'react';
import {
  Platform,TouchableOpacity,
  StyleSheet,
  Text,Button,
  View, NetInfo
} from 'react-native';
import InternetConnectivity from './utils/InternetConnectivity';
import custom from './css/custom';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'NetInfo exposes info about online/offline status.',
});

export default class App extends Component {

componentDidMount() {
  NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

  NetInfo.isConnected.fetch().done(
    (isConnected) => { this.setState({ status: isConnected }); }
  );
}

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
}

handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
}

getValue(){
  //alert(`is connected: ${this.state.status}`);
  if(this.state.status){
    alert('Internet is connected..!!');
  }else{
    alert('Internet is not available..!!');
  }
}
  render() {
    return (
      <View style={custom.container}>
       <InternetConnectivity />
        <Text style={custom.welcome}>
          React Native Codility!
        </Text>
        <View style={{ width: '100%', height: '.5%', backgroundColor:'green', top:35}} />
        <Text style={custom.instructions}>
          {instructions}
        </Text>
            <View style={custom.ButtonContainer}>                 
                <Button onPress={this.getValue.bind(this)} title="Check Connection" color='green' />
            </View>
      </View>

    );
  }
}