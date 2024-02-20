import React, { useEffect } from "react";
import { View, Text, BackHandler, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

export const EmployeeHome = (props) => {
    // const name = props.route.params.firstname;
    // const email = props.route.params.email;

    // const handleBackPress = () => {
    //     Alert.alert(
    //         "Exit", "Are you sure you want to exit ?",
    //         [{
    //             text: 'cancel',
    //             onPress: () => null,
    //             style: 'cancel'
    //         },
    //         {
    //             text: 'Exit',
    //             onPress: () => BackHandler.exitApp()
    //         }
    //         ]);
    //     return true;
    // };

    // useFocusEffect(
    //     React.useCallback(() => {
    //         BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    //         return () => {
    //             BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    //         }
    //     })
    // );

    return (
        <View>
            <Text style={{ fontSize: 170 }} >Hello</Text>
        </View>
    )
};