
import React, {Component} from "react";
import{
  View,
  Text,
  StyleSheet
} from "react-native";

// import {createBottomTabNavigator } from 'react-navigation'

export class App extends Component {
  render(){
    return (
      <View style={styles.container}>
      <Text>Open Up App.js to start working on your app</Text>
      </View>
    );
  }
}

// export class Settings extends Component {
//   render(){
//     return (
//       <View style={styles.container}>
//       <Text>This is your Settings File</Text>
//       </View>
//     );
//   }
// }




// export default createBottomTabNavigator({
//   Home:Home,
//   Settings: Settings
// });

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  }
})