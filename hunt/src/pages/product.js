import React from 'react';

import { WebView } from 'react-native-webview';

const Proudct = ({ navigation }) => (
  <WebView source={{ uri:navigation.state.params.product.url}} />

);

Proudct.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title
});

export default Proudct;