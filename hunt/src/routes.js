import { createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Product from './pages/product';


export default createStackNavigator({
  Main,
  Product
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  },
});

//export default createAppContainer(
//  createDrawerNavigator({
//    Main:Main,
//  })
//);