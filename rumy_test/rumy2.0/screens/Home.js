import React from 'react';

import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import {TapGestureHandler,State} from "react-native-gesture-handler";
import Login from "../Components/Login";
import Signup from "../Components/Signup"
const Home = () => {
    return (



        <View style ={styles.container} >
            <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
                <Text style={styles.welcome}>
                    Welcome to Rumy
                </Text>
                <View>
                    <StatusBar bar Style = "dark-content" hidden = {false} backgroundColor = "#80d8ff" translucent = {true}/>
                    <View>

                        <View style={styles.moveBoth}>
                            <Login  />
                            <Signup/>
                        </View>

                    </View>


                </View>
            </LinearGradient>

        </View>

    )
};

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#212121',
        alignItems:'center',
        justifyContent: 'center',
    },

    welcome: {
        borderColor: 'rgba(0,0,0,0.3)',
        fontSize: 32,
        margin: '15%',
        color: "#fffafa",
        fontFamily: 'LilitaOne-Regular',
        fontWeight: '100',
        marginVertical: 60

    },
    moveBoth: {
        margin: 15,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 100,
    },

});