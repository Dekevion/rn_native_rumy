import React, {Component} from 'react'
import Animated, {Easing} from "react-native-reanimated";
import {TapGestureHandler, State} from "react-native-gesture-handler";
import {
    View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Button, TouchableOpacityComponent, Dimensions
} from "react-native";


import Forms from "./Forms";
// const {Value,
//     event,block, cond,eq,
//     set,Clock, startClock,stopClock,debug,timing,clockRunning,
//     Extrapolate,interpolate} = Animated;
// const {width, height} = Dimensions.get('window');
// function runTiming(clock, value, dest) {
//     const state = {
//         finished: new Value(0),
//         position: new Value(0),
//         time: new Value(0),
//         frameTime: new Value(0)
//     };
//
//     const config = {
//         duration: 1000,
//         toValue: new Value(0),
//         easing: Easing.inOut(Easing.ease)
//
//     };
//
//     return block([
//         cond(clockRunning(clock), 0, [
//             set(state.finished, 0),
//             set(state.time, 0),
//             set(state.position, value),
//             set(state.frameTime, 0),
//             set(config.toValue, dest),
//             startClock(clock)
//         ]),
//         timing(clock, state, config),
//         cond(state.finished, debug('stop clock', stopClock(clock))),
//         state.position
//     ]),
//     this.buttonY = interpolate(this.buttonOpacity,{
//         inputRange:[0,1],
//         outputRange:[100,0],
//         extrapolate: Extrapolate.CLAMP
//     }),
//     this.bgY = interpolate(this.buttonOpacity,{
//         inputRange:[0,1],
//         outputRange:[-height / 3,0],
//         extrapolate: Extrapolate.CLAMP
//     })
// }

// class Login extends Component  {

// constructor() {
//     super();
//     this.buttonOpacity = new Value(1);
//
//
//     this.onStateChange = event([
//         {
//             nativeEvent: ( {state} ) =>block([
//                 cond(eq(state,State.END), set(this.buttonOpacity,runTiming(new Clock(),1,0)))
//             ])
//         }
//
//     ])
// }

// render() {
// const Login = ({navigate}) => {
//     return (
class Login extends Component {
    render() {

      return (
          <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.moveButton}>
                  <Text style={styles.editButton} onPress={() => navigate('LogScreen')}>Login</Text>
              </View>
          </TouchableOpacity>
      )
    }
 }


//     )
// };

//
// <Animated.View style={{transform:[{translateY:this.bgY}]}}>
//     <TapGestureHandler onHandlerStateChange={this.onStateChange}>
//         <Animated.View style={{opacity:this.buttonOpacity,
//             transform:[{translateY:this.buttonY}]}}>


//         </Animated.View>
//     </TapGestureHandler>
//
// </Animated.View>

//         )
//     }
// };
const styles = StyleSheet.create({

    moveButton: {
        marginRight: "35%",
        width: 150,
        marginHorizontal: "30%",

    },
    editButton: {

        backgroundColor: '#Fffafa',
        height: 30,
        borderRadius: 50,
        width: '100%',
        textAlign: 'center',
        fontSize: 20
    }

});
export default Login;

