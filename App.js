import 'react-native-gesture-handler';
import React from "react";
import { Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EmployeeSignUp } from "./EmployeeSignUp";
import { EmployeeLogin } from "./EmployeeLogin";
import { EmployeeHome } from "./EmployeeHome";
import { AdminLogin } from "./AdminLogin";
import { FirstPage } from "./FirstPage";
import { AdminHome } from "./AdminHome"
import { OTP } from "./OTP";
import { Profile } from "./Profile";
import { LogOut } from './LogOut';
import { MarkAttendence } from './MarkAttendence';
import { ChangePassword } from "./ChangePassword";
import { FirstPageTp } from "./FirstPageTp";
import { InsideDrawerContent } from './InsideDrawerContent';
import { Splash } from './Splash';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackNav = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#3483eb'
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="splash" component={Splash}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="FirstPage" component={FirstPage}
                options={{
                    headerTitle: "Welcome",
                }}
            />
            <Stack.Screen name="EHome" component={EmployeeHome}
                options={{
                    headerTitle: "Home",
                    headerLeft: () => {
                        return (
                            <Icon
                                name="bars"
                                color="#fff"
                                size={25}
                                onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
                            />
                        )
                    }
                }}
            />
            <Stack.Screen name="Employee SignUp" component={EmployeeSignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: 'black'
                }}
            />
            <Stack.Screen name="Employee Login" component={EmployeeLogin}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: 'black'
                }}
            />
            <Stack.Screen name="ChangePassword" component={ChangePassword}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: 'black'
                }}
            />
            <Stack.Screen name="OTP verification" component={OTP}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: 'black'
                }}
            />
            <Stack.Screen name="Admin Login" component={AdminLogin}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: 'black'
                }}
            />
            <Stack.Screen name="Admin Home" component={AdminHome} />
        </Stack.Navigator>
    )
}

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={StackNav}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Attendance"
                component={MarkAttendence}
                options={{
                    tabBarLabel: 'Attendance',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="More"
                component={LogOut}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ellipsis-h" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            // drawerStyle={{ width: 300 }}
            drawerContent={props => <InsideDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#3483eb',
                },
                headerShown: false,
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={TabNav}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true,
                    drawerIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer >
    )
}

export default App;