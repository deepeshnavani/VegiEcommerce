//Employee Login page

import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
    RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export const AdminLogin = (props) => {

    // const email = props.route.params.email;
    // const password = props.route.params.pass;
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPass, setEnteredPass] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.main}>
                <View style={styles.loginPage}>
                    <Text style={styles.loginTitle}>Login as Admin</Text>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.inputField}
                        placeholder="Yourname@gmail.com"
                        onChangeText={(n) => setEnteredEmail(n)}
                        value={enteredEmail}
                        autoCapitalize="none"
                    />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(n) => setEnteredPass(n)}
                            value={enteredPass}
                            accessibilityLabel="Email Address"
                            accessibilityHint="Enter your email address"
                        />
                        <TouchableOpacity onPress={togglePassword} >
                            <Icon style={styles.Icon} name={showPassword ? "eye" : "eye-with-line"} size={20} color="#85888c" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.forgotPassword} onPress={forgotLoginPassword} >forgot password?</Text>
                    <TouchableOpacity style={styles.loginButton} >
                        <Text style={styles.loginButtonText} onPress={() =>
                            loginDetails(props.navigation, email, password, enteredEmail, enteredPass, setEnteredEmail, setEnteredPass)} >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const forgotLoginPassword = () => {
    console.warn("Your password is: Haha");
}

const loginDetails = (navigation, email, password, enteredEmail, enteredPass, setEnteredEmail, setEnteredPass) => {

    if (enteredEmail && enteredPass) {
        if (enteredEmail === email && enteredPass === password) {
            navigation.navigate("Home");
            setEnteredEmail("");
            setEnteredPass("");
        }
        else {
            console.error("Incorrect email or password");
        }
    }
    else {
        console.error("Please enter both email and password!");
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    main: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginPage: {
        backgroundColor: 'white',
        width: responsiveWidth(80),
        height: responsiveHeight(45),
        borderRadius: responsiveWidth(5),
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveWidth(5),
    },
    loginTitle: {
        fontSize: responsiveWidth(5),
        color: 'black',
        padding: responsiveHeight(2),
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    inputField: {
        borderColor: 'black',
        marginVertical: responsiveHeight(1.5),
        borderWidth: 0.5,
        borderRadius: responsiveWidth(2),
        padding: responsiveWidth(3),
        width: '90%',
    },
    loginButton: {
        backgroundColor: '#3483eb',
        borderRadius: responsiveWidth(2),
        marginVertical: responsiveHeight(2),
        width: '90%',
    },
    loginButtonText: {
        color: 'white',
        padding: responsiveWidth(4),
        fontSize: responsiveWidth(4),
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    forgotPassword: {
        color: 'blue',
        textAlign: 'center',
        marginVertical: responsiveHeight(2),
    },
    Icon: {
        position: 'absolute',
        right: responsiveWidth(2),
        marginTop: -responsiveHeight(1),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});