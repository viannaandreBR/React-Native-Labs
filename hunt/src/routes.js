import { createStackNavigator } from 'react-navigation';

import Main from './pages/Main';

export default createStackNavigator({
  Main
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