import React from "react";
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const LogOut = () => {
    return (
        <View>
            <Icon name="logout" size={50} color="black" />
            <Text>LogOut</Text>
        </View>
    )
}