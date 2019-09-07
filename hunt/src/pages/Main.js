import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
static navigationOptions = {
  headerTitleStyle :{textAlign: 'center',alignSelf:'center', flex:1, fontSize: 22, fontWeight: 'bold'},
   title: 'Product Hunt',
};

state = {
  docs: [],
};

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
    <View style={styles.productContainer}>
      <Text sytle={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.productButton}onPress={()=>{}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>

    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList   
            contentContainerStyle={styles.list}
            data = {this.state.docs}
            keyExtractor={item => item._id}
            renderItem = {this.renderItem}
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fafafa"
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription:{
    fontSize: 12,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  productButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }


});

