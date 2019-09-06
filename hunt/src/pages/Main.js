import React, { Component } from 'react';

import { View, Text } from 'react-native';


export default class Main extends Component {



static navigationOptions = {

  headerTitleStyle :{textAlign: 'center',alignSelf:'center', flex:1},
   title: 'Product Hunt',
};

  render() {
    return (
      <View>

            <Text>Pagina Main</Text>

      </View>
    );

  }
}