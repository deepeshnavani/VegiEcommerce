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

export const ChangePassword = (props) => {

    const [changePassword, setChangePassword] = useState("");
    const [changeAgainPassword, setchangeAgainPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passError, setPassError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const validatePass = (changePassword) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const whitespaceRegex = /\s/;

        if (changePassword === "") {
            setPassError("Enter password");
        } else if (changePassword.length < 8) {
            setPassError("Password must be at least 8 characters");
        } else if (whitespaceRegex.test(changePassword)) {
            setPassError("Password cannot contain whitespace characters");
        } else if (!uppercaseRegex.test(changePassword)) {
            setPassError("Password must contain at least one uppercase letter");
        } else if (!lowercaseRegex.test(changePassword)) {
            setPassError("Password must contain at least one lowercase letter");
        } else if (!digitRegex.test(changePassword)) {
            setPassError("Password must contain at least one digit");
        } else {
            setPassError("");
        }
    }

    const validateConfirmPass = (changeAgainPassword) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const whitespaceRegex = /\s/;

        if (changeAgainPassword === "") {
            setConfirmPassError("Enter password");
        } else if (changeAgainPassword.length < 8) {
            setConfirmPassError("Password must be at least 8 characters");
        } else if (whitespaceRegex.test(changeAgainPassword)) {
            setConfirmPassError("Password cannot contain whitespace characters");
        } else if (!uppercaseRegex.test(changeAgainPassword)) {
            setConfirmPassError("Password must contain at least one uppercase letter");
        } else if (!lowercaseRegex.test(changeAgainPassword)) {
            setConfirmPassError("Password must contain at least one lowercase letter");
        } else if (!digitRegex.test(changeAgainPassword)) {
            setConfirmPassError("Password must contain at least one digit");
        } else {
            setConfirmPassError("");
        }
    }

    const [error, setError] = useState("");

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.main}>
                <View style={styles.loginPage}>
                    <Text style={styles.loginTitle}>Change Password</Text>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.inputField}
                        placeholder="Enter password"
                        onChangeText={(n) => setChangePassword(n)}
                        value={changePassword}
                        autoCapitalize="none"
                        onBlur={() => validatePass(changePassword)}
                    />
                    {
                        passError !== "" ? <Text style={styles.errorText} >{passError}</Text> : null
                    }
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Confirm Password"
                            // secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(n) => setchangeAgainPassword(n)}
                            value={changeAgainPassword}
                            onBlur={() => validateConfirmPass(changeAgainPassword)}
                        />
                        <TouchableOpacity onPress={togglePassword} >
                            {/* <Icon style={styles.Icon} name={showPassword ? "eye" : "eye-with-line"} size={20} color="#85888c" /> */}
                        </TouchableOpacity>
                    </View>
                    {
                        confirmPassError !== "" ? <Text style={styles.errorText} >{confirmPassError}</Text> : null
                    }
                    <TouchableOpacity style={styles.loginButton} >
                        <Text style={styles.loginButtonText} onPress={() =>
                            ChangePassword1(props.navigation, changePassword, changeAgainPassword, setError)} >Change Password</Text>
                    </TouchableOpacity>
                    {
                        error !== "" ? <Text style={styles.errorText}>{error}</Text> : null
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const ChangePassword1 = (navigation, changePassword, changeAgainPassword, setError) => {
    if (changePassword && changeAgainPassword) {
        if (changePassword === changeAgainPassword) {
            navigation.navigate("Admin Login", { changePassword });
        }
        else {
            setError("passwords do not match");
        }
    }
    else {
        setError("Please enter both passwords");
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