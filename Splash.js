import React from "react";
import { View, Text, Image } from 'react-native';

export const Splash = () => {
    return (
        <View>
            <Text>Spalsh Screen</Text>
            <Image
                source={require("C:\Users\deepe\OneDrive\Pictures\Camera Roll\QRAttendence.jpg")}
                style={{
                    width: 50, height: 50
                }}
            />
        </View>
    )
};