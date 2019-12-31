import React, {Component} from 'react';
import {
    View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Dimensions, PermissionsAndroid,
    Button,
} from "react-native";
import MapView from 'react-native-maps';
import {LinearGradient} from "expo-linear-gradient";
import MagicScreen from "./MagicScreen";
// const MapScreen = () => {
//     return (
//
//         <MapView styles={styles.map} initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//         }}>
//
//         </MapView>

//     )
// };
// const styles = StyleSheet.create({
//     mapContainer: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         // width: '100%',
//         // height: '100%',
//         // flex: 1
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//     }

// });
class MapScreen extends Component {
    render() {
        function locationPlease () {
            try{
                {
                    navigator.geolocation.getCurrentPosition(position => {
                        console.log(position);
                    }, error => console.log(error));
                    const granted = PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Access User Location Permission',
                            message: 'To Continue, turn on device location.',
                            // buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK'
                        },
                    );
                    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //     console.log('You can use the map');
                    // } else {
                    //     console.log('Permission Denied')
                    // }
                }
            } catch (e) {
                console.warn(e);
            }
        }
        return (
            <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']}
                            style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
            <View style ={styles.mapContainer}>
                <MapView
                    style={ styles.map }
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.moveButton}>
                        <Text style={styles.editButton} onPress={() => locationPlease()}>Fetch Location</Text>

                    </View>
                </TouchableOpacity>
            </View>
            </LinearGradient>



        )
    }

}

const styles = StyleSheet.create({
    mapContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // height: 400,
        // width: 400,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        // width: '100%',
        // height: 200
    },
    map: {
        // width: '100%',
        // height: '100%',
        // flex: 1
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 599

    },
    editButton: {
        backgroundColor: '#Fffafa',
        height: 30,
        borderRadius: 50,
        textAlign: 'center',
        fontSize: 20,
        justifyContent: 'center',
        padding: 1
    },
    moveButton:{
        marginVertical: '150%',
        justifyContent: 'center',
        alignItems: 'center'

    }
});
export default MapScreen