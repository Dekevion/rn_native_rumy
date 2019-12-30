import React from 'react'

import {View, TextInput, Text, StyleSheet} from "react-native";

const Title = props => {
    return (
        <View>
            <Text style={styles.tex}>
             Welcome to Rumy
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
tex: {
    color: "#ffffff",
    fontSize: 30,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderColor: '#d6d7da',
    padding: 5
}

});
export default Title