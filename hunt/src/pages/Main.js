import React, { Component } from 'react';
import api from '../services/api';
import { View, Text } from 'react-native';


export default class Main extends Component {
static navigationOptions = {
  headerTitleStyle :{textAlign: 'center',alignSelf:'center', flex:1},
   title: 'Product Hunt',
};


state = {

  docs: [],

}


  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const { docs } = response.data;

    this.setState({ docs });

    //console.log(docs);
  };

  render() {
    return (
      <View>

            <Text>Pagina Main:</Text>
            {this.state.docs.map(product => (
              <Text key={product._id}>{product.title}</Text>))}


      </View>
    );

  }
}