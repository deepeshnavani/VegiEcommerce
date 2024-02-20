// Main page
import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EmployeeSignUp } from "./EmployeeSignUp";
import { EmployeeLogin } from "./EmployeeLogin";
import { EmployeeHome } from "./EmployeeHome";
import { AdminLogin } from "./AdminLogin";
import { FirstPage } from "./FirstPage";
import { AdminHome } from "./AdminHome";
import { OTP } from "./OTP";
import { ChangePassword } from "./ChangePassword";

const Stack = createNativeStackNavigator();
const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }}>
                <Stack.Screen name="FirstPage" options={{ headerShown: false }} component={FirstPage} />
                <Stack.Screen name="ChangePassword" options={{ headerShown: false }} component={ChangePassword} />
                <Stack.Screen name="OTP" options={{ headerShown: true }} component={OTP} />
                <Stack.Screen name="Admin Login" component={AdminLogin}
                    options={{
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen name="Employee SignUp" component={EmployeeSignUp}
                    options={{
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen name="Employee Login" component={EmployeeLogin}
                    options={{
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen name="Employee Home" component={EmployeeHome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Admin Home" component={AdminHome}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;