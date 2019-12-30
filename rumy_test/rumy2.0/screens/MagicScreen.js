import React, {Component} from 'react';
import {
    View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Dimensions, PermissionsAndroid,
Button} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

// class MagicScreen extends Component {
//     render() {
//         try{
//              this.getLocation = () => {
//                 navigator.geolocation.getCurrentPosition(position => {
//                     console.log(position);
//                 }, error => console.log(error));
//                 const granted = PermissionsAndroid.request(
//                     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                     {
//                         title: 'Access User Location Permission',
//                         message: 'To Continue, turn on device location.',
//                         buttonNeutral: 'Ask Me Later',
//                         buttonNegative: 'Cancel',
//                         buttonPositive: 'OK'
//                     },
//                 );
//                 if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                     console.log('You can use the map');
//                 } else {
//                     console.log('Permission Denied')
//                 }
//             }
//         } catch (e) {
//             console.warn(e);
//         }
//
//
//
//         return (
//             <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
//
//             <View style={styles.container}>
//
//                 <Text style={styles.tex}>
//                     Where the Magic Happens!
//                 </Text>
//
//
//                 <TouchableOpacity activeOpacity={0.8}>
//                     <View style={styles.moveButton}>
//                         <Text style={styles.editButton} onPress= {() => getLocation()}>Fetch Location</Text>
//                     </View>
//                 </TouchableOpacity>
//
//
//             </View>
//             </LinearGradient>
//         );
//     }
// }
// const MagicScreen = (props) => {
//     try{
//       function getLocation () {
//             navigator.geolocation.getCurrentPosition(position => {
//                 console.log(position);
//             }, error => console.log(error));
//             const granted = PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: 'Access User Location Permission',
//                     message: 'To Continue, turn on device location.',
//                     buttonNeutral: 'Ask Me Later',
//                     buttonNegative: 'Cancel',
//                     buttonPositive: 'OK'
//                 },
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log('You can use the map');
//             } else {
//                 console.log('Permission Denied')
//             }
//         }
//     } catch (e) {
//         console.warn(e);
//     }
//     return (
//         <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']}
//                         style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
//
//             <View style={styles.container}>
//
//                 <Text style={styles.tex}>
//                     Where the Magic Happens!
//                 </Text>
//
//
//                 <TouchableOpacity activeOpacity={0.8}>
//                     <View style={styles.moveButton}>
//                         <Text style={styles.editButton} onPress={() => getLocation()}>Fetch Location</Text>
//                     </View>
//                 </TouchableOpacity>
//
//
//             </View>
//         </LinearGradient>
//     )
// };
const MagicScreen = () => {
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
                    buttonNeutral: 'Ask Me Later',
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
        // <View style={styles.button}>
        //     <Button title="Please" onPress={() => locationPlease()}></Button>
        // </View>
        <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']}
                        style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>

            <View style={styles.container}>

                <Text style={styles.tex}>
                    Where the Magic Happens!
                </Text>


                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.moveButton}>
                        <Text style={styles.editButton} onPress={() => locationPlease()}>Fetch Location</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tex: {
        fontFamily: 'LilitaOne-Regular',
        color: "#ffffff",
        marginVertical: 50
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
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default MagicScreen;