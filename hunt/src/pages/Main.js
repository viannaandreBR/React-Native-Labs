import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

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

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={()=>{}}>
        <Text>Acessar</Text>
      </TouchableOpacity>

    </View>
  );

  render() {
    return (
      <View>
        <FlatList   
            data = {this.state.docs}
            keyExtractor={item => item._id}
            renderItem = {this.renderItem}
        />
      </View>
    );

  }
}