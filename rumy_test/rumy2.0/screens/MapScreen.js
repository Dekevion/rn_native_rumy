import React, {Component} from 'react';
import {
    View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView, Dimensions, PermissionsAndroid,
    Button,
} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import {LinearGradient} from "expo-linear-gradient";
import {AnimatedRegion} from "react-native-maps";

// import MagicScreen from "./MagicScreen";

class MapScreen extends Component {
    constructor() {
        super();
        this.state = {

            latitude: null,
            longitude: null,
            error: null,
            array: [],
           markers: [],
        };

    }

    componentDidMount() {

        {
            navigator.geolocation.getCurrentPosition(position => {
                let region = {
                    latitude: (position.coords.latitude),
                    longitude: (position.coords.longitude),
                    latitudeDelta: 0.00111,
                    longitudeDelta: 0.0123,
                };
                this.setState({
                    initialRegion: region
                });
                // const url = "http://10.0.0.3:8000/coordinate/";
                // fetch(url, {
                //     method: 'POST',
                //     body: JSON.stringify({
                //         latitude: this.state.initialRegion.latitude,
                //         longitude: this.state.initialRegion.longitude
                //     }),
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json'
                //     }
                // })
                //     .then(data => data.json());




                    // .then(response => console.log(response));
                // console.log("Latitude: " + position.coords.latitude);
                // console.log("Longitude: " + position.coords.longitude);
                // console.log("initialRegion Latitude: " + this.state.initialRegion.latitude);
                // console.log("initialRegion Longitude: " + this.state.initialRegion.longitude);


                // console.log("State Longitude: " + this.region.longitude);
                //
                // console.log("Your  Position: Latitude " + position.coords.latitude);
                // console.log("Your Position: Longitude " + position.coords.longitude);

                console.log('After Position is logged')
            }, error => console.log(error));
            // {
            //     enableHighAccuracy: true,
            //     timeout: 20000,
            //     maximumAge: 1000
            // };
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
            // console.log(this.state.userLocation);

        }

    }

    // goToInitialLocation() {
    //     let initialRegion = Object.assign({}, this.state.initialRegion);
    //     initialRegion["latitudeDelta"] = 0.005;
    //     initialRegion["longitudeDelta"] = 0.005;
    //     this.mapView.animateToRegion(initialRegion, 2000);
    // }

    // addLocation () {
    //     const url = "http://10.0.0.9:8000/coords";
    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude,
    //         })
    //     })
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))
    //
    //     }

    fetchLocations() {
        const url = "http://10.0.0.3:8000/coordinate/";
        fetch(url)
            .then(response => response.json())
            // .then(data => console.log(data))
            // .then(coordinates => {
            //     const coordArray = [];
            //     for (const key in coordinates) {
            //       latitude: coordinates[key].latitude,
            //         longitude: coordinates[key].longitude,
            //             id: key
            //     };
            .then(coordinates => {
                let user_position = coordinates.map((each_element) => {
                    return (
                        <Marker key={each_element.id} coordinate={{
                            latitude: parseFloat(each_element.latitude),
                            longitude: parseFloat(each_element.longitude)
                        }}
                        title={'my location'}>

                        </Marker>
                    )
                } );
                this.setState({
                    markers: {
                        latlng: {
                            user_position
                        }
                    }
                });
                console.log(this.state.markers)
            });



                        // id: each_element.id,
                        // latlng: {
                        //     latitude: each_element.latitude,
                        //     longitude: each_element.longitude
                        // }

                // this.setState({
                //     markers: user_position,
                //     array: user_position
                //
                // });
                // console.log(this.state.markers)
                //
                // } );



    }

    render() {

        return (
            <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']}
                            style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
                <View style={styles.mapContainer}>

                    <MapView style={styles.map} initialRegion={this.state.initialRegion}
                             followsUserLocation={true}
                             ref={ref => (this.mapView = ref)}
                             zoomEnabled={true}
                             showsUserLocation={true}

                    >

                    {/*<Marker coordinate={{*/}
                    {/*    latitude:35.0186924,*/}
                    {/*    longitude*/}
                    {/*}}> </Marker>*/}

                    </MapView>

                    <View style={styles.moveButton}>
                        <Text style={styles.editButton} onPress={() => this.fetchLocations()}>Grab Locations</Text>
                        {/*    <Button title={'please'} style={styles.editButton}/>*/}
                    </View>

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
        height: 610

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
    moveButton: {
        marginVertical: '177%',
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default MapScreen
//
// const MapScreen = (props) => {
//
//         function locationPlease() {
//             try {
//                 {
//                     navigator.geolocation.getCurrentPosition(position => {
//                         this.setState({
//                             userLocation: {
//                                 latitude: position.coords.latitude,
//                                 longitude: position.coords.latitude,
//                                 latitudeDelta: 0.0922,
//                                 longitudeDelta: 0.0421,
//                             }
//                         });
//                         console.log(position);
//                     }, error => console.log(error));
//     const granted = PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//             title: 'Access User Location Permission',
//             message: 'To Continue, turn on device location.',
//             // buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK'
//         },
//     );
// if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     console.log('You can use the map');
// } else {
//     console.log('Permission Denied')
// }
// console.log(this.state.userLocation);

//                 }
//             } catch (e) {
//                 console.warn(e);
//             }
//         }
//     return (
//         <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']}
//                         style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
//             <View style={styles.mapContainer}>
//                 <MapView
//                     style={styles.map}
//                     initialRegion={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                         region={props.userLocation}
//                 />
//
//                 <TouchableOpacity activeOpacity={0.8}>
//                     <View style={styles.moveButton}>
//                         <Text style={styles.editButton} onPress={() => locationPlease()}>Fetch Location</Text>
//
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         </LinearGradient>
//     )
// };
//
// const styles = StyleSheet.create({
//     mapContainer: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         // height: 400,
//         // width: 400,
//         // justifyContent: 'flex-end',
//         // alignItems: 'center',
//         // width: '100%',
//         // height: 200
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
//         width: '100%',
//         height: 610
//
//     },
//     editButton: {
//         backgroundColor: '#Fffafa',
//         height: 30,
//         borderRadius: 50,
//         textAlign: 'center',
//         fontSize: 20,
//         justifyContent: 'center',
//         padding: 1
//     },
//     moveButton: {
//         marginVertical: '177%',
//         justifyContent: 'center',
//         alignItems: 'center'
//
//     }
// });
// export default  MapScreen
