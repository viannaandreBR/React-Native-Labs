import React, { Component } from 'react';
import api from '../services/api';
import { View, Text } from 'react-native';


export default class Main extends Component {
static navigationOptions = {
  headerTitleStyle :{textAlign: 'center',alignSelf:'center', flex:1},
   title: 'Product Hunt',
};


state = {

  counter: 0,

}


  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const { docs } = response.data;

    this.setState({ counter: docs.length });

   console.log(docs);
  };

  render() {
    return (
      <View>

            <Text>Pagina Main: {this.state.counter}</Text>

      </View>
    );

  }
}