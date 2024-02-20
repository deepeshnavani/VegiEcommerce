import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Title } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const InsideDrawerContent = () => {
    return (
        <View style={{ flex: 1 }} >
            <DrawerContentScrollView>
                <View style={styles.drawerContent} >
                    <TouchableOpacity>
                        <View style={[{ flexDirection: 'row', marginTop: 10 }, styles.mainContent]} >
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
                                }}
                                style={{ width: 50, height: 50, marginTop: 5 }}
                            />
                            <View style={{ marginLeft: 10, flexDirection: 'column' }} >
                                <Title>Deepesh</Title>
                                <Text>hahaha@gmail.com</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.drawerSection}>
                        <DrawerItems />
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
};

const DrawerList = [

    { icon: 'home', label: 'Home', navigateTo: 'Home' },
    { icon: 'user', label: 'Profile', navigateTo: 'Profile' },

];
const DrawerLayout = ({ icon, label, navigateTo }) => {
    const navigation = useNavigation();
    return (
        <DrawerItem
            icon={({ color, size }) => (<Icon name={icon} color={color} size={size} />)}
            label={label}
            onPress={() => {
                navigation.navigate(navigateTo);
            }}
        />
    )
};

const DrawerItems = props => {
    return DrawerList.map((el, i) => {
        return (
            <DrawerLayout
                key={i}
                icon={el.icon}
                label={el.label}
                navigateTo={el.navigateTo}
            />
        )
    })
}

const styles = StyleSheet.create({

    // drawerContent: {
    //     flex: 1,
    // },
    mainContent: {
        marginLeft: 15,
        marginTop: 10
    },
    drawerSection: {
        marginTop: 20
    }

});