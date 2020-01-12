import React, {  Component  } from 'react'
import {LinearGradient} from "expo-linear-gradient";
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Forms from "../Components/Forms";
const {width: WIDTH} = Dimensions.get('window');

class LogScreen extends Component  {

    render() {
        const url = "http://10.0.0.3:8000/user";
        try {
            getConsole = () => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    }
                })
                    .then(data => data.json())
                    .then(response => console.log(response))
            }
        } catch (error) {
            console.log("found error " + error)
        }


        //     getConsole = () => {
        //         console.log('log')
        //     }
        return (
            <View style = {styles.container}>
                <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{flex: 1, alignItems: 'center', justifyContent: "center", width:'100%' }}>
                    <View>
                        <Text style={styles.reg}>
                            Login
                        </Text>
                    </View>
                    <TextInput style={styles.input}
                               placeholder={'Enter Username'}
                               placeholderTextColor={'#ffffff'}
                               underlineColorAndroid={'transparent'}>

                    </TextInput>
                    <View style={styles.divider}>

                    </View>
                    <TextInput style={styles.input}
                               placeholder={'Enter Password'}
                               secureTextEntry={true}
                               placeholderTextColor={'#ffffff'}
                               underlineColorAndroid={'transparent'}>

                    </TextInput>


                    <View style={styles.pushUp}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.moveButton}>
                                <Text style={styles.editButton} onPress={() => getConsole()}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>


            </View>
        )
    };

    }


const styles = StyleSheet.create({
    tex: {
        fontSize: 25,
        color: "#ffffff",
    },
    container: {
        flex: 1,
        backgroundColor: '#62717b',
        alignItems:'center',
        justifyContent: 'center',
        width:'100%',

    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        margin: 10
    },
    reg: {
        fontFamily: 'LilitaOne-Regular',
        fontWeight: '100',
        fontSize: 32,
        color: "#fffafa",
        marginBottom: 15,

    },
    eye: {
        position: 'absolute',
        top: 330,
        right: 40
    },
    pushUp: {
        marginTop: 65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editButton: {
        backgroundColor: '#Fffafa',
        height: 30,
        borderRadius: 50,
        width: '220%',
        textAlign: 'center',
        fontSize: 20,
        justifyContent:'center',

    },
    moveButton: {
        marginRight: 60
    }
});
export default LogScreen;

