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

export const EmployeeLogin = (props) => {

    const email = props.route.params.email;
    const password = props.route.params.pass;
    const firstname = props.route.params.firstname;
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPass, setEnteredPass] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

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
                    <Text style={styles.loginTitle}>Login</Text>
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
                    <Text style={styles.forgotPassword} onPress={() => forgotLoginPassword(props.navigation, password,
                        enteredPass, setEnteredPass)} >forgot password?</Text>
                    <TouchableOpacity style={styles.loginButton} >
                        <Text style={styles.loginButtonText} onPress={() =>
                            loginDetails(props.navigation, email, password, enteredEmail, enteredPass, setEnteredEmail,
                                setEnteredPass, error, setError, setShowPassword, firstname)} >Login</Text>
                    </TouchableOpacity>
                    {
                        error !== "" ? <Text style={styles.errorText} >{error}</Text> : null
                    }
                    <Text style={styles.loginText2} >Don't have an account?
                        <Text style={styles.loginLink} onPress={() => moveFromHere(props.navigation, setEnteredEmail,
                            setEnteredPass)} > SignUp</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}

const moveFromHere = (navigation, setEnteredPass, setEnteredEmail) => {
    navigation.navigate("Employee SignUp");
    setEnteredPass("");
    setEnteredEmail("");
}

const forgotLoginPassword = (navigation, password, enteredPass, setEnteredPass) => {
    // console.warn("Your password is: " + password);
    // setEnteredPass(password);
    navigation.navigate("OTP verification");
}

const loginDetails = (navigation, email, password, enteredEmail, enteredPass, setEnteredEmail, setEnteredPass,
    error, setError, setShowPassword, firstname) => {
    if (enteredEmail && enteredPass) {
        if (enteredEmail === email && enteredPass === password) {
            navigation.navigate("Home", { email: email, firstname: firstname });
            setEnteredEmail("");
            setEnteredPass("");
            setShowPassword();
        }
        else {
            setError("Incorrect email or password");
        }
    }
    else {
        setError("Please enter both email and password!");
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    main: {
        backgroundColor: '#3483eb',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginPage: {
        backgroundColor: 'white',
        width: responsiveWidth(80),
        height: responsiveHeight(50),
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
        borderWidth: 0.8,
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
    loginText2: {
        fontSize: responsiveWidth(3.2),
        textAlign: 'center',
        marginVertical: responsiveHeight(2),
    },
    loginLink: {
        color: 'blue',
        fontWeight: 'bold',
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
    errorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: "500",
    },
});