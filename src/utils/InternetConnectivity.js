import React, { PureComponent } from 'react';
import { View, Text, NetInfo } from 'react-native';
import custom from '../css/custom';

function CheckInternet() {
  return (
    <View style={custom.offlineContainer}>
      <Text style={custom.offlineText}>No Internet Connection</Text>
    </View>
  );
}

function Connected() {
  return (
    <View style={custom.onlineContainer}>
      <Text style={custom.offlineText}>Internet Connected..!!</Text>
    </View>
  );
}

export default class InternetConnectivity extends PureComponent {
   state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
      this.setState({isConnected });
  };

  render() {
    if (!this.state.isConnected) {
      return <CheckInternet />;
    }
    return <Connected />;
  }
}