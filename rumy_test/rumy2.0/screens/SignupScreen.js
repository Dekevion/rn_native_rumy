import React, {  Component  } from 'react'

import {
    View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Dimensions
} from "react-native";
import Forms from "../Components/Forms";
import {LinearGradient} from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
// import MapScreen from "./screens/MapScreen";
const {width: WIDTH} = Dimensions.get('window');
class SignupScreen extends Component  {
    constructor() {
        super();
        this.state = {
                isLoggedIn: false,
                userId: 0,
                name: "",
                password: "",

        };

    }
        updateValue (text, field){
        // console.log(text)
            if (field == 'name'){
                this.setState({
                    name: text
                })
            }
            else if (field == 'password'){
                this.setState({
                    password: text
                })
            }
        }
        createUser = async () => {
        let collection = {}
                collection.name = this.state.name,
                collection.password = this.state.password,
            console.log(collection)


            const userBody = collection;
            const url = "http://10.0.0.3:8000/user/";
// FETCH ATTEMPT 1
            // const url = "http://10.0.0.3:8000/coordinate/";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    // latitude: this.state.initialRegion.latitude,
                    // longitude: this.state.initialRegion.longitude
                    name: userBody.name,
                    password: userBody.password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(data => data.json())
                .then(response => {
                    console.log("response 1");
                    if (response === false) {
                        this.setState({new_user_error_msg: "Username is already taken!"});
                    } else {
                        console.log("response 2" + response);
                        this.setState({
                            name: response.name,
                            userID: response.id,
                            isLoggedIn: true
                        })
                        console.log("State Changes: Name " + this.state.name);
                        console.log("State Changes: Is Logged In " + this.state.isLoggedIn);
                        console.log("State Changes: User ID " + this.state.userID);

                        console.log(".THEN RESPONSES: " + response.name)
                    }
                })
                // .then((userBody) => {
                //     this.props.navigator.push({
                //         component: Mapscreen
                //     })
                // })



            // fetch(url, {
            //     method: 'GET',
            //     headers: {
            //         Accept: 'application/json',
            //     }
            // })
            //     .then(response => response.json())
            //     .then(data => console.log(data))



                // .then(resp=> {
                //     console.log("Response1");
                //     if(resp === false)
                //     {
                //         this.setState({new_user_error_msg: "Username is already taken!"});
                //     } else {
                //         console.log("response2: " + resp);
                //         this.setState({
                //             isLoggedIn: true,
                //             name: resp.name,
                //             userID: resp.id
                //         })
                //     }
                // });



            // FETCH ATTEMPT 2
        //     fetch(url, {
        //         method: 'POST', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(userBody),
        //     })
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log('Success:', data);
        //         })
        //         .catch((error) => {
        //             console.error('Error:', error);
        //         });



        }
    render() {

        return (
        <View style = {styles.container}>
            <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{flex: 1, alignItems: 'center', justifyContent: "center", width:'100%' }}>
                <View>
                    <Text style={styles.reg}>
                        Register
                    </Text>
                </View>

                <TextInput style={styles.input}
                           placeholder={'Enter username'}
                           placeholderTextColor={'#ffffff'}
                           underlineColorAndroid={'transparent'}
                           onChangeText={(text) => this.updateValue(text, 'name')}>

                </TextInput>
                <View style={styles.divider}>

                </View>

                <TextInput style={styles.input}
                           placeholder={'Enter Password'}
                           placeholderTextColor={'#ffffff'}
                           underlineColorAndroid={'transparent'}
                           onChangeText={(text) => this.updateValue(text, 'password')}>

                </TextInput>

                <TouchableOpacity style={styles.eye}>
                    <Icon name={'ios-eye'} size={26} color={'rgba(255,255,255,0.7)'}></Icon>
                </TouchableOpacity>
                <View style={styles.pushUp}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.moveButton}>
                            <Text style={styles.editButton} onPress={() => this.createUser()}>Register</Text>
                        </View>
                    </TouchableOpacity>
                    {this.state.new_user_error_msg}
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
        marginRight: 90
    }
});
export default SignupScreen;