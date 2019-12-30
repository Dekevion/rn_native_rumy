import React, {  Component  } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Button} from "react-native";
import Forms from "./Forms";
import SignupScreen from "../screens/SignupScreen";
const Login = props => {


    return (
        <View style={styles.moveButton}>
            {/*<Button title={'Signup'}>*/}

            {/*</Button>*/}
            <Text style={styles.edit}>New to the app? Sign Up</Text>
        </View>
    )
};
const styles = StyleSheet.create({

    moveButton: {
        marginRight: "35%",
        width: 150,
        marginHorizontal: "27%",
        marginVertical: "15%"
    },
    edit: {
        fontSize: 15,
        textAlign: 'center',
        color: "#FFFafa",
        width: "110%"

    }
});
export default Login;