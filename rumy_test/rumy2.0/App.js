import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Login from "./Components/Login";
import Title from "./Components/Title";
import Signup from "./Components/Signup"
import * as Font from 'expo-font'
import SignupScreen from "./screens/SignupScreen";
import LogScreen from "./screens/LogScreen";
import Home from "./screens/Home";
import MagicScreen from "./screens/MagicScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import MapScreen from "./screens/MapScreen";
import {AppLoading} from "expo";
// WRAP OUTER STACK IN A CONTAINER
const getFonts = () => Font.loadAsync({
  'LilitaOne-Regular': require('./assets/fonts/LilitaOne-Regular.ttf'),
});




const HomeStack = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      header: null,
    }

  },
});
const Bottom = createBottomTabNavigator({
  HomeStack,
  LogScreen: {
    screen: LogScreen,
    navigationOptions: {
      header: null,
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      header: null,
    }
  },
  // MagicScreen: {
  //   screen: MagicScreen,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      header: null
    }
  }
});
// const Bottom2 = createBottomTabNavigator({
//     HomeStack,
//     LogScreen: {
//         screen: LogScreen,
//         navigationOptions: {
//             header: null,
//         }
//     },
//     SignupScreen: {
//         screen: SignupScreen,
//         navigationOptions: {
//             title: 'tab2',
//             header: null
//         }
//     }
//     });

const Navigation = createAppContainer(Bottom);


const App = () => {
  // const state = {
  // userLocation: null
  // };

  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded) {

    return (

        <Navigation  />
        //     <View style={styles.container}>
        //         <StatusBar bar Style = "dark-content" hidden = {false} backgroundColor = "#80d8ff" translucent = {true}/>
        //
        //         <View>
        //             <Title />
        //
        //             <View style={styles.moveBoth}>
        //                 <Login style = {styles.moveFirst}/>
        //                 <Signup/>
        //             </View>
        //
        //         </View>
        //
        //
        //
        //     </View>
        //
    );
  } else {
    return (
        <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}></AppLoading>

    )
  }
};

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62717b',
    alignItems:'center',
    justifyContent: 'center'

  },
  moveBoth: {
    padding: 10,
  },


});
