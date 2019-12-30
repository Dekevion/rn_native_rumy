import React, {  Component  } from 'react'

import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView} from "react-native";

const Forms = props => {
    return (
        <View>
            <Text style ={styles.Inputtex}>
              <TextInput>

              </TextInput>
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    Inputtex: {
        width: 300,
    }
});
export default Forms;